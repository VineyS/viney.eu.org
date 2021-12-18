let burger = document.querySelector('.hamburger');
let menu = document.querySelector(".res-nav");

const activeMenuBar = ()=>{
    if (menu.classList.contains("toggled")) {
        menu.classList.remove("toggled");
    } else {
        menu.classList.add('toggled');
    }
}

burger.addEventListener("click", activeMenuBar);