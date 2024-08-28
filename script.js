// let myAge = 35;
// let humanDogRatio = 7;
// let myDogAge = myAge*humanDogRatio;
// console.log(myDogAge);
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let PreviousEntires = count + " - "
    saveEl.textContent += PreviousEntires
    countEl.textContent = 0
    count = 0
    
}

