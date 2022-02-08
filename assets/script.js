// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Frederick Tremblay" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let cartTotal = ( gb + cc + sugar )

function updateQuantity(displayQuantity) {
    let Total = document.querySelector(".total-gb");
    totalQuantity.textContent = displayQuantity;
    Total.textContent = `Total: ${cartTotal}`;
    console.log(cartTotal);
    gbPlusBtn.addEventListener("click",function(a) {
        if (gb > 0 ) {
            gb--;
            cartTotal = gb
            updateQuantity(`Quantity: ${gb}`)
        }
    }
    )
}
function updateQuantity(displayQuantity) {
    let Total = document.querySelector(".total-cc");
    totalQuantity.textContent = displayQuantity;
    Total.textContent = `Total: ${cartTotal}`;
    console.log(cartTotal);
    gbPlusBtn.addEventListener("click",function(b) {
        if (cc > 0 ) {
            cc--;
            cartTotal = cc
            updateQuantity(`Quantity: ${cc}`)
        }
    }
    )
}
function updateQuantity(displayQuantity) {
    let Total = document.querySelector(".total-sugar");
    totalQuantity.textContent = displayQuantity;
    Total.textContent = `Total: ${cartTotal}`;
    console.log(cartTotal);
    gbPlusBtn.addEventListener("click",function(c) {
        if (sugar > 0 ) {
            sugar--;
            cartTotal = sugar
            updateQuantity(`Quantity: ${sugar}`)
        }
    }
    )
}
// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function(a) {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')
if (gb > 0 ) {
    gb--;
    updateQuantity(`Quantity: ${gb}`);
}})
gbPlusBtn.addEventlistener('click', function(a) {

console.log('Gingerbread - button was click!')
gb++;
    updateQuantity(`Quantity: ${gb}`)


})

ccMinusBtn.addEventListener('click', function(b){

console.log('Chocolate Chip + button was clicked!')
if (cc > 0 ) {
    cc--;
    updateQuantity(`Quantity: ${cc}`);
}})
ccPlusBtn.addEventlistener('click', function(b) {

console.log('Chocolate Chip - button was click!')
{cc++;
    updateQuantity(`Quantity: ${cc}`)
}

})

sugarMinusBtn.addEventListener('click', function(c){

    console.log('Sugar Sprinkle + button was clicked!')
    if (sugar > 0 ) {
        sugar--;
        updateQuantity(`Quantity: ${sugar}`);
    }})
    sugarPlusBtn.addEventlistener('click', function(c) {
    
    console.log('Sugar Sprinkle - button was click!')
    {sugar++;
        updateQuantity(`Quantity: ${sugar}`)
    }
    
    })

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons