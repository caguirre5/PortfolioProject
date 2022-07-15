window.addEventListener('scroll', () => {
    let t1= document.getElementById('title')
    let t2= document.getElementById('subtitle')
    let sun = document.getElementById('sun')
    let b6 = document.getElementById('b6')
    let b5 = document.getElementById('b5')
    let b4 = document.getElementById('b4')

    t1.style.transform = `translateX(-${window.scrollY/2}px)`
    t2.style.transform = `translateX(${window.scrollY/2}px)`
    sun.style.transform = `translateY(${window.scrollY/4}px)`
    b6.style.transform = `translateY(${-(window.scrollY/4)}px)`
    b5.style.transform = `translateY(${-(window.scrollY/4.5)}px)`
    b4.style.transform = `translateY(${-(window.scrollY/6)}px)`
})