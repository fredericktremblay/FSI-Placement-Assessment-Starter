// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Frederick Tremblay" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

const qtygb = document.querySelector('#qty-gb')

const qtycc = document.querySelector('#qty-cc')

const qtysugar = document.querySelector('#qty-sugar')

const qtytotal = document.querySelector('#qty-total')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')


credit.textContent = `Created by ${yourName}`


gbPlusBtn.addEventListener('click', function(a) {

console.log('Gingerbread + button was clicked!')
 
 gb++; console.log('add-gb', gb)

let qtygb = document.querySelector('#qty-gb')

let qtytotal = document.querySelector('#qty-total')

qtygb.textContent = `${gb}`
qtytotal.textContent = `${qtytotal}`


})

gbMinusBtn.addEventListener('click', function(a) {

console.log('Gingerbread - button was clicked!')
 if (gb > 0)
 gb--; console.log('minus-gb', gb)

 let qtygb = document.querySelector('#qty-gb')

 let qtytotal = document.querySelector('#qty-total')
 
 qtygb.textContent = `${gb}`
 qtytotal.textContent = `${qtytotal}`

 
})

ccPlusBtn.addEventListener('click', function(b) {

    console.log('Chocolate Chip + button was clicked!')
    
    cc++; console.log('add-cc', cc)

    let qtycc = document.querySelector('#qty-cc')

    let qtytotal = document.querySelector('#qty-total')

    qtycc.textContent = `${cc}`
    qtytotal.textContent = `${qtytotal}`

})

ccMinusBtn.addEventListener('click', function(b) {

    console.log('Chocolate Chip - button was clicked!')
    if (cc > 0 )
    cc--; console.log('minus-cc', cc)

    let qtycc = document.querySelector('#qty-cc')

    let qtytotal = document.querySelector('#qty-total')
    
    qtycc.textContent = `${cc}`
    qtytotal.textContent = `${qtytotal}`
})

sugarPlusBtn.addEventListener('click', function(c) {

    console.log('SUgar Sprinkle + button was clicked!')

    sugar++; console.log('add-sugar', sugar)

    let qtysugar = document.querySelector('#qty-sugar')

    let qtytotal = document.querySelector('#qty-total')

    qtysugar.textContent = `${sugar}`
    qtytotal.textContent = `${qtytotal}`
})

sugarMinusBtn.addEventListener('click', function(c) {

    console.log('Sugar Sprinkle - button was clicked!')
    if (sugar > 0)
    sugar--; console.log('minus-sugar', sugar)

    let qtysugar = document.querySelector('#qty-sugar')

    let qtytotal = document.querySelector('#qty-total')

    qtysugar.textContent = `${sugar}`
    qtytotal.textContent = `${qtytotal}`
})







// TODO: Hook up event listeners for the rest of the buttons