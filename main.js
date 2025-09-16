let menu=document.getElementById("menu-toggle")
let menuList=document.getElementById("menu")
menu.addEventListener("click",()=>{
    menu.classList.toggle("active");
    menuList.classList.toggle("active");
})