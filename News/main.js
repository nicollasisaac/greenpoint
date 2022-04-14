let types = [
    {
        type: "Agriculture",
        name: "Agricultura"
    },
    {
        type: "Food",
        name: "Alimentação"
    }, 
    {
        type: "Sustainability",
        name: "Sustentabilidade"
    }
];

types.map((item) => {
    News.map((itemNews) => {
        let items_carrosel = document.querySelector(`.${item.type} .items_carrosel`).cloneNode(true);
        
        if(item.type === itemNews.type) {         
            items_carrosel.querySelector(".container_ItemsCarrosel h2").innerHTML = itemNews.title;
            items_carrosel.querySelector(".container_ItemsCarrosel p").innerHTML = `${itemNews.link} - Consultado em ${new Date(itemNews.consultationDate).toLocaleDateString()}`;
            items_carrosel.querySelector(".container_ItemsCarrosel img").src = itemNews.imageNews;
            items_carrosel.querySelector(".container_ItemsCarrosel a").href = itemNews.LinkNews;

            document.querySelector(`.${item.type} #container_carrosel`).append(items_carrosel);
        }
    })
})