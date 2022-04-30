'use strict'

let btn = document.querySelector('.btn')
let firstName = document.querySelector('.firstName')
let lastName = document.querySelector('.lastName')
let password = document.querySelector('.password')
let email = document.querySelector('.email')
let errorFirstName = document.querySelector('.error-firstName')
let errorlastName = document.querySelector('.error-lastName')
let errorPassword = document.querySelector('.error-password')
let errorEmail = document.querySelector('.error-email')

btn.addEventListener('click', function(e) {
    e.preventDefault()

    validateInputs(firstName, errorFirstName)
    validateInputs(lastName, errorlastName)
    checkEmail(email, errorEmail)
    validateInputs(password, errorPassword)
})

function validateInputs(input, errorName) {

    if(input.value === "") {
        checkError(errorName)
        textDesigns(input)
    }
}

function textDesigns(inputValue) {
    inputValue.style.background = " url(images/icon-error.svg) no-repeat right";
    inputValue.style.border = '2px solid hsl(0, 100%, 74%)'
    inputValue.style.backgroundPositionX = "95%";
}

function checkError(errorName) {
    if(errorName == errorFirstName) {
        errorName.textContent = "First name cannot be empty"
        errorFirstName.classList.remove('hidden')
    } 

    if(errorName == errorlastName) {
        errorName.textContent = "Last name cannot be empty"
        errorName.classList.remove('hidden')
    }

    if(errorName == errorPassword) {
        errorName.textContent = "Password cannot be empty"
        errorName.classList.remove('hidden')
    }
}

function checkEmail(email, errorEmail) {

    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/

    if(email.value === "") {
        errorEmail.textContent = "Email cannot be empty"
        email.style.background = " url(images/icon-error.svg) no-repeat right";
        email.style.border = '2px solid hsl(0, 100%, 74%)'
        email.style.backgroundPositionX = "95%";
        errorEmail.classList.remove('hidden')
    } else if (email.value !== pattern) {
        errorEmail.textContent = "Looks like this is not an email"
        email.style.background = " url(images/icon-error.svg) no-repeat right";
        email.style.border = '2px solid hsl(0, 100%, 74%)'
        email.style.backgroundPositionX = "95%";
        errorEmail.classList.remove('hidden')
    } 
}
