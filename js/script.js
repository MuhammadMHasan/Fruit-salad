/*grab some content from HTML */
const fruitForm = document.querySelector('#inputSection form')

//grab fruit list
const fruitList = document.querySelector('#fruitSection ul')

//creates HTML element, adds the fruit passed into element and append to fruit list
const addFruit = fruit => {
    if (!fruit)
    const li = document.createElement("li")
    li.textContent = fruit
    fruitList.appendChild(li) // adds item to end of list   
}

//eventlsitned added to check for submit 
fruitForm.addEventListener("submit", e => {
    //preventdefault = prevnets from refreshing page
    e.preventDefault()
    //finds the value from the object
    addFruit/*console.log88*/(e.target.fruitInput.value)
    // re-sets the text box
    e.target.fruitInput.value = ""

})


