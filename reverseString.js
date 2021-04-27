//* A function that will reverse a given string
// const reverse = (str) => {
//     //variable to store the reversed string
//     let revString = ''
//     //loop that will iterate backwards until i = 0
//   for (var i = str.length - 1; i >= 0; i--) {
//       //storing each reversed letter into newString variable
//       revString+= str[i]
//   }
//   //Result
//   return revString
// };


//*Recursive function to reverse a string 
// function reverse(str) {
//   if (str.length <= 1) return str;
//   return reverse(str.slice(1)) + str[0];
// }

//*Another recursive function
function reverse(str) {
  if (str === "") return "";
  else return reverse(str.substr(1)) + str.charAt(0);
}

console.log(reverse('holiday')) // yadiloh
// console.log(reverse("perro")) // orrep
// console.log(reverse("quetzalcoatl")) // ltaoclazteuq

// console.log(myString);