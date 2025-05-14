window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 1)
})

let btnMenu = document.querySelector('#btn-menu')
let line1 = document.querySelector('.linemenu1')
let line2 = document.querySelector('.linemenu2')

btnMenu.addEventListener("click", () => {
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
})


