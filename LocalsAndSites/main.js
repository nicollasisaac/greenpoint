Places.map((itemlocal, index) => {
    let itemsLocal = document.querySelector(".localandsite").cloneNode(true);

    itemsLocal.id = "localandsite";
    itemsLocal.querySelector(".localtxt h2").innerHTML = itemlocal.title;
    itemsLocal.querySelector(".localtxt p").innerHTML = "Contato: " + itemlocal.phoneNumber;
    itemsLocal.querySelector(".buttonlocal").setAttribute("onclick", `switchVerMais(${index})`);
    itemsLocal.querySelector(".closeMenu .icon").setAttribute("onclick", `switchVerMais(${index})`);
    itemsLocal.querySelector(".showlinks .share").setAttribute("onclick", 
    `{navigator.clipboard.writeText('Nome: ${itemlocal.title} | Site: ${itemlocal.link} | Local: ${itemlocal.address} - ${itemlocal.state} | Telefone: ${itemlocal.phoneNumber}')}`)

    if(itemlocal.address)
    {
        itemsLocal.querySelector(".showlinks .copy").setAttribute("onclick", `{navigator.clipboard.writeText('${itemlocal.address}')}`)
        itemsLocal.querySelector(".localadress p").innerHTML = itemlocal.address;
    }
    else {
        itemsLocal.querySelector(".showlinks .copy").setAttribute("onclick", `{navigator.clipboard.writeText('${itemlocal.link}')}`)
        itemsLocal.querySelector(".localadress").style.display = "none";
    }

    if(itemlocal.link) {
        itemsLocal.querySelector(".localsite a").innerHTML = itemlocal.link;
        itemsLocal.querySelector(".localsite a").href = itemlocal.link;
    }
    else {
        itemsLocal.querySelector(".localsite").style.display = "none";
    }
    
    document.querySelector("#Local").append(itemsLocal);
})

document.getElementById("localandsite_model").parentNode.removeChild(document.getElementById("localandsite_model"));

AOS.init();