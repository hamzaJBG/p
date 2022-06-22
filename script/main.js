const homeMenubtn=document.querySelector(".home-menu")
homeMenubtn.addEventListener('click',_=>{
    document.querySelector('.slide-header').classList.add('slide-header-active')
})
const sections=document.querySelector(".sections")
sections.addEventListener("click",_=>{
    document.querySelector('.slide-header').classList.remove('slide-header-active')
})