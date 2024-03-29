// window.addEventListener('scroll', () => {
let t1= document.getElementById('title')
let t2= document.getElementById('subtitle')
let sun = document.getElementById('sun')

window.addEventListener('scroll', () => {
    t1.style.transform = `translateX(-${window.scrollY/2}px)`
    t2.style.transform = `translateX(${window.scrollY/2}px)`
    let sky = document.getElementById('sky')
    let b5 = document.getElementById('b5')
    let b4 = document.getElementById('b4')
    let b3 = document.getElementById('b3')
    let b2 = document.getElementById('b2')
    let b1 = document.getElementById('b1')

    if (window.outerWidth > 720) {
        b5.style.transform = `translateY(${(window.scrollY/7)}px)`
        b4.style.transform = `translateY(${(window.scrollY/8)}px)`
        b3.style.transform = `translateY(${(window.scrollY/9)}px)`
        b2.style.transform = `translateY(${(window.scrollY/4)}px)`
        b1.style.transform = `translateY(${(window.scrollY/4)}px)`
        sky.style.transform = `translateY(${(window.scrollY/4)}px)`
    }
})

const toggleMenuElement = document.getElementById('toggle-menu')
const mainMenuElement = document.getElementById('main-menu')
const menuclose = document.getElementById('icono-menu')
const themebutton = document.getElementById('switch')
const themebuttoncontainer = document.getElementById('theme-button-container')
const sky2 = document.getElementById('sky2')
const labels = document.querySelectorAll('.input-group label')

toggleMenuElement.addEventListener('click', () => { 
    themebuttoncontainer.classList.toggle('theme-button__hidden')
    mainMenuElement.classList.toggle('main-menu__show')
})

themebutton.addEventListener('click', () => {
    themebutton.classList.toggle('switch-change')
    sun.classList.toggle('sunset')
    sky2.classList.toggle('sky2-show')
})

const fadeOut = () => {
    const LoadWrapper = document.querySelector('.loader')
    LoadWrapper.classList.add('fade')
}

window.addEventListener('load', fadeOut)

labels.forEach((label) => {
    label.innerHTML = label.innerText
    .split("")
    .map(
        (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("")
})