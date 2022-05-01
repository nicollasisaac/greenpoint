AOS.init();
let verIsOpen = false;

function switchVerMais(numItem) {
    var ver =  document.querySelectorAll('.ver');
    console.log(ver);

    if(!verIsOpen)
    {
        ver[numItem].classList.add("verIsOpen");
        ver[numItem].classList.remove("verIsClose");
        verIsOpen = true;
        return;
    }

    if(verIsOpen) {
        ver[numItem].classList.remove("verIsOpen");
        ver[numItem].classList.add("verIsClose");
        verIsOpen = false;
        return;
    }
}
