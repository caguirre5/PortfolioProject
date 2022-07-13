window.addEventListener('scroll', () => {
    let t1= document.getElementById('title')
    let t2= document.getElementById('subtitle')
    t1.style.transform = `translateX(-${window.scrollY/2}px)`
    t2.style.transform = `translateX(${window.scrollY/2}px)`
})