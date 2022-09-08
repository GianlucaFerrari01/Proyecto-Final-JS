window.addEventListener("load", () => {
    fetch("https://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=9eb4a89d78e340e996b18f222c52603a")
        .then((res) => {
            return res.json()
        })
        .then((info) => {
            let noticiasApi = document.querySelector("#notis")
            console.log(info.results)
            let noticias =info.results


            noticias.forEach(noticia => {
                noticiasApi.innerHTML += "<img src=" + noticia.image + ">"

                noticiasApi.innerHTML += "<li>" + " " + noticia.name + "</li>"
            })
        })
        .catch((e)=>{
            alert("Error! Intente mas tarde!")
        })

})
