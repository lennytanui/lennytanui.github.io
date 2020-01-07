const nav = document.querySelector('nav')
const menuBtn = document.querySelector('#menu-btn')

const toggleNav = () => {
    nav.classList.toggle("hide")
    menuBtn.classList.toggle('close')
}