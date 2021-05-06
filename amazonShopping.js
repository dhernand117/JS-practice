// Amazon shopping
//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart
//Bonus:
// accept refunds.
// Track user history.
const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};
const history1 = [];
const compose = (f, g) => (...args) => f(g(...args));
const pipe = (f, g) => (...args) => g(f(...args));
// purchaseItem
const purchaseItem = (...fns) => fns.reduce(compose);
const purchaseItem2 = (...fns) => fns.reduce(pipe);
purchaseItem2(
  addItemToCart,
  applyTaxToItems,
  buyItem,
  emptyUserCart
)(user, { name: "laptop", price: 600 });

//   addItemToCart
// )(user, {name: 'laptop', price: 50})
function addItemToCart(user, item) {
  history1.push(user);
  const updatedCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updatedCart });
}
//   applyTaxToItems,
function applyTaxToItems(user) {
  history1.push(user);
  const { cart } = user;
  const taxRate = 1.09;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}
//   buyItem,
function buyItem(user) {
  history1.push(user);
  const itemsInCart = user.cart;
  return Object.assign({}, user, { purchases: itemsInCart });
}
//   emptyUserCart,
function emptyUserCart(user) {
  history1.push(user);
  return Object.assign({}, user, { cart: [] });
}
 console.log(history1);
 console.log(user);
function refundItem() {
    
}

function getUserState() {}

function goBack() {}

function goForward() {}