const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')
const body = document.querySelector('body')

btnHamburger.addEventListener('click', function() {
    console.log("hamburger clicked")
    if (header.classList.contains('open')) { // Close Hamburger Menu
        header.classList.remove('open')
        body.classList.remove('noscroll')
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })

    } else { //Open Hamburger Menu
        header.classList.add('open')
        body.classList.add('noscroll')
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })

    }

})