var carrosel = document.getElementById("carrosel");
var container_carrosel = document.getElementById("container_carrosel");
var items_carrosel = document.querySelectorAll("#container_carrosel .items_carrosel");

var index = 0;
var margin = 0;
var width = carrosel.clientWidth;

window.onresize = function(){
    width = carrosel.clientWidth;
    calcWidthItemsCarrosel();
}

calcWidthItemsCarrosel();

function calcWidthItemsCarrosel() {
    if(width > 900) {
        for(var i = 0; i < items_carrosel.length; i++) {
            items_carrosel[i].style.width = (width/3) + "px";
        }
    }
    else if(width < 900 && width > 450) {
        for(var i = 0; i < items_carrosel.length; i++) {
            items_carrosel[i].style.width = (width/2) + "px";
        }
    }
    else {
        for(var i = 0; i < items_carrosel.length; i++) {
            items_carrosel[i].style.width = width + "px";
        }
    }
}

function moveRight() {
    var numItems = Math.round(document.getElementById("container_carrosel").clientWidth / carrosel.clientWidth);

    margin += -width;

    container_carrosel.style.marginLeft = margin + "px";

    if(index == numItems - 1) {
        container_carrosel.style.marginLeft = "0px";
        margin = 0;
        index = 0;
    }
    else {
        index++;
    }
}

function moveLeft() {
    if(index == 0)
        return;

    margin += width;
    container_carrosel.style.marginLeft = margin + "px";

    index--;
}