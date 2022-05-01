var carrosel = document.getElementById("carrosel");
var container_carrosel = document.querySelectorAll("#container_carrosel");
var items_carrosel = document.querySelectorAll("#container_carrosel .items_carrosel");

var index = [];
var margin = [];
var width = carrosel.clientWidth;

calcWidthItemsCarrosel();
calcNumCarrousels();

window.onresize = function(){
    width = carrosel.clientWidth;
    calcWidthItemsCarrosel();
    calcNumCarrousels();
}

function calcNumCarrousels() {
    for(var i = 0; i < container_carrosel.length; i++) {
        index.push(0);
        margin.push(0);
    }
}

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

function moveRight(numCarrosel) {
    var numItems = Math.round(container_carrosel[numCarrosel].clientWidth / carrosel.clientWidth + 0.5);

    margin[numCarrosel] += -width;

    container_carrosel[numCarrosel].style.marginLeft = margin[numCarrosel] + "px";

    if(index[numCarrosel] === numItems - 1) {
        container_carrosel[numCarrosel].style.marginLeft = "0px";
        margin[numCarrosel] = 0;
        index[numCarrosel] = 0;
    }
    else {
        index[numCarrosel]++;
    }
}

function moveLeft(numCarrosel) {
    if(index[numCarrosel] === 0)
        return;

    margin[numCarrosel] += width;
    container_carrosel[numCarrosel].style.marginLeft = margin[numCarrosel] + "px";

    index[numCarrosel]--;
}