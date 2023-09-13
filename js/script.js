// /*grab some content from HTML */
// const fruitForm = document.querySelector('#inputSection form')

// //grab fruit list
// const fruitList = document.querySelector('#fruitSection ul')

// //grab fruit nutrition
// const fruitNutrition = document.querySelector('#nutritionSection p')

// //fetches fruit data
// const fetchFruitData = fruit => {
//     fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`) //fetches data from URL returns promise
//     .then((resp) => resp.json())    //gives a response object which is turned into json format
//     .then(data => addFruit(data)) // then grabs some data 
//     .then(e => console.error(e))// catches the error & can do something about it
// }

// let totalCal = 0
// //creates HTML element, adds the fruit passed into element and append to fruit list
// const addFruit = fruit => {
//     const li = document.createElement("li")
//     li.textContent = fruit.name
//     li.addEventListener("click", removeFruit, {once:true})
//     fruitList.appendChild(li) // adds item to end of list   
//     if (fruit.nutrition && fruit.nutrition.calories) {
//         totalCal = totalCal + fruit.nutrition.calories;
//     }
//      //adds the total calores for each fruit as user inout name
//     fruitNutrition.textContent =  totalCal

// }

// const removeFruit = e => {
//     e.target.remove ()
// }

// //eventlsitned added to check for submit 
// fruitForm.addEventListener("submit", e => {
//     //preventdefault = prevnets from refreshing page
//     e.preventDefault()
//     //finds the value from the object
//     fetchFruitData(e.target.fruitInput.value) //addFruit console.log//
//     // re-sets the text box
//     e.target.fruitInput.value = ""

// })

// grabs all the elements we need to add stuff to
const fruitForm = document.querySelector("#inputSection form")
const fruitList = document.querySelector('#fruitSection ul')
const fruitNutrition = document.querySelector("#nutritionSection p")
const pictures = document.querySelector("#pictureSection")
// getting data from different apis
const fetchFruitData = async fruit => {
    try {
        const resp = await fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)
        const data = await resp.json()
        addFruit(data)
    } catch (err) {
        console.log(err)
    }
    fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)
}
let totalCal = 0
let totalCarbs = 0
let protein = 0
let fat = 0
let sugar = 0
const getPicture = async fruit => {
    try{
        const resp = await fetch(`https://pixabay.com/api/?q=${fruit}+fruit&key=39374528-53dc5c1d23d291f89155a7cb3`)
        const data = await resp.json()
        displayPic(data)
    } catch(err) {
        console.err(err)
    }
}
const displayPic = data => {
    const pic = document.createElement('img')
    pic.src = data.hits[0].webformatURL
    pictures.appendChild(pic)
    console.log(data)
}
// main function
const addFruit = fruit => {
    // create a li element
    const li = document.createElement("li")
    // li content will be whatever is passed to fruit parameter
    li.textContent = fruit.name
    // add li to ul with id of fruit list
    fruitList.appendChild(li)
    // listen for a click event on li elements and remove
    li.addEventListener("click", () => {
        fruitList.removeChild(li)
    })
    // adds nutrition section
    totalCal += fruit.nutritions.calories
    totalCarbs += fruit.nutritions.carbohydrates
    protein += fruit.nutritions.protein
    fat += fruit.nutritions.fat
    sugar += fruit.nutritions.sugar
    fruitNutrition.textContent =
    `
    Total Calories: ${totalCal}
    Total Carbohydrates: ${totalCarbs}
    Protein: ${protein}
    Fat: ${fat.toFixed(2)}
    Sugar: ${sugar}
    `
    // adds fruit image
    getPicture(fruit.name)
}
// submit button
fruitForm.addEventListener("submit", e => {
    // prevents page from refreshing
    e.preventDefault()
    // add fruit function is passed the value of input as parameter.
    fetchFruitData(e.target.fruitInput.value)
    // clears the value from input box once clicked.
    e.target.fruitInput.value = ""
})
console.log(fruitForm)
