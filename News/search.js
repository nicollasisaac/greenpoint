const searchInput = document.querySelector('.input #search');

searchInput.addEventListener('input', () => {
    let searchText = searchInput.value;

    // Input text does not exist
    console.log(searchText.length)
    if(searchText.length == 0)
    {
        document.querySelector(".carrousels").style.display = "block";
        document.querySelector(".search").style.display = "none";

        removeSearchNews();
    }

    else {
        document.querySelector(".carrousels").style.display = "none";
        document.querySelector(".search").style.display = "block";

        search(searchText);
    }
})

async function search(searchText) {
    removeSearchNews()

    let results = News.filter(item => {
        if(item.title.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1)
            return true;
        else
            return false;
    })

    results.map((itemNews) => {
        let items_carrosel = document.querySelector(`.items_carrosel_search`).cloneNode(true);

        items_carrosel.id = "items_carrosel";  
        items_carrosel.style.display = 'block'
        items_carrosel.querySelector(".container_ItemsCarrosel h2").innerHTML = itemNews.title;
        items_carrosel.querySelector(".container_ItemsCarrosel p").innerHTML = `${itemNews.link} - Consultado em ${new Date(itemNews.consultationDate).toLocaleDateString()}`;
        items_carrosel.querySelector(".container_ItemsCarrosel img").src = itemNews.imageNews;
        items_carrosel.querySelector(".container_ItemsCarrosel a").href = itemNews.LinkNews;

        document.querySelector('#container_search').append(items_carrosel);
    })
}

function removeSearchNews() {
    var searchContainer = document.getElementById("container_search");

    let model = document.querySelector(`.items_carrosel_search`).cloneNode(true);
    
    searchContainer.innerHTML = "";
    searchContainer.append(model)
}