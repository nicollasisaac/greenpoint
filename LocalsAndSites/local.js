 AOS.init();
 let verIsOpen = false;

function switchVerMais() {
    var ver;
    ver =  document.getElementById('ver');
    if(!verIsOpen)
    {
        ver.classList.add("verIsOpen");
        ver.classList.remove("verIsClose");
        verIsOpen = true;
        return;
    }

    if(verIsOpen) {
        ver.classList.remove("verIsOpen");
        ver.classList.add("verIsClose");
        verIsOpen = false;
        return;
        ver = 0;
    }
}

