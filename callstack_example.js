function takeShower(){
    return console.log("Showering!")
}

function eatBreakfast(){
    let meal = cookFood()
    return console.log(`Eating ${meal}`)
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return console.log(items[Math.floor(Math.random()*items.length)]);
}
function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

wakeUp()