Places.map((itemlocal, index) => {
    let itemsLocal = document.querySelector(".localandsite").cloneNode(true);

    itemsLocal.id = "localandsite";
    itemsLocal.querySelector(".localtxt h2").innerHTML = itemlocal.title;
    itemsLocal.querySelector(".localtxt p").innerHTML = "Contato: " + itemlocal.phoneNumber;
    itemsLocal.querySelector(".buttonVerMais").setAttribute("onclick", `switchVerMais(${index})`);
    itemsLocal.querySelector(".close span").setAttribute("onclick", `switchVerMais(${index})`);

    if(itemlocal.address)
    {
        itemsLocal.querySelector(".localadress p").innerHTML = itemlocal.address;
    }
    else {
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