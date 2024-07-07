let open = document.querySelector('.hamburger-icon')
let close = document.querySelector('.cross-icon')

let coverPage = document.querySelector('.cover')

open.addEventListener('click',()=>{
    coverPage.classList.add('flex')
    coverPage.classList.remove('hidden')
    console.log("clicked");
})

close.addEventListener('click',()=>{
    coverPage.classList.add('hidden')
    coverPage.classList.remove('flex')
    console.log("unclicked");
})