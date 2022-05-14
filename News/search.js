const searchInput = document.querySelector('.input #search');

searchInput.addEventListener('input', () => {
    let searchText = searchInput.value;

    // Input text does not exist
    if(searchText.length == 0)
    {
        removeSearchNews();
    }

    else {
        document.querySelector(".carrousels").style.display = "none";
        document.querySelector(".search").style.display = "block";

        search(searchText);
    }
})

function search(searchText) {
    let results = News.filter(item => {
        if(item.title.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1)
            return true;
        else
            return false;
    })

    results.map((itemNews) => {
        let items_carrosel = document.querySelector(`.items_carrosel_search`).cloneNode(true);

        items_carrosel.id = "items_carrosel";       
        items_carrosel.querySelector(".container_ItemsCarrosel h2").innerHTML = itemNews.title;
        items_carrosel.querySelector(".container_ItemsCarrosel p").innerHTML = `${itemNews.link} - Consultado em ${new Date(itemNews.consultationDate).toLocaleDateString()}`;
        items_carrosel.querySelector(".container_ItemsCarrosel img").src = itemNews.imageNews;
        items_carrosel.querySelector(".container_ItemsCarrosel a").href = itemNews.LinkNews;

        document.querySelector('#container_search').append(items_carrosel);
    })

    
    document.getElementById("items_carrosel_model_search").parentNode.removeChild(document.getElementById("items_carrosel_model_search"));
}

function removeSearchNews() {
    var searchContainer = document.getElementById("container_search");

    for(var i = 0; i < searchContainer.childElementCount; i++)
    {
        
    }
}