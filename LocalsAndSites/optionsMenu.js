let verIsOpen = false;

let lastNumItem = null;

function switchVerMais(numItem) {
    var ver =  document.querySelectorAll('.ver');

    if(lastNumItem != null && numItem != lastNumItem) {
        ver[lastNumItem].classList.remove("verIsOpen");
        ver[lastNumItem].classList.add("verIsClose");

        ver[numItem].classList.add("verIsOpen");
        ver[numItem].classList.remove("verIsClose");
        verIsOpen = true;
        lastNumItem = numItem;
        return;
    }

    if(!verIsOpen)
    {
        ver[numItem].classList.add("verIsOpen");
        ver[numItem].classList.remove("verIsClose");
        verIsOpen = true;
        lastNumItem = numItem;
        return;
    }

    if(verIsOpen) {
        ver[numItem].classList.remove("verIsOpen");
        ver[numItem].classList.add("verIsClose");
        verIsOpen = false;
        return;
    }
}