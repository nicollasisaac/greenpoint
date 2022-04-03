let menuIsOpen = false;

var menu = document.getElementById("menu");

function switchMenu() {
    if(!menuIsOpen)
    {
        menu.classList.add("menuIsOpen");
        menu.classList.remove("menuIsClose");
        menuIsOpen = true;
        return;
    }

    if(menuIsOpen) {
        menu.classList.remove("menuIsOpen");
        menu.classList.add("menuIsClose");
        menuIsOpen = false;
        return;
    }
}