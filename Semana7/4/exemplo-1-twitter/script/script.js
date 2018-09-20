//CORREÇÃO PROFESSORA
const inputTweet = document.getElementById("tweetComposerInput")
const buttonCreateTweet = document.querySelector(".tweet-composer__button")

const tweetsTimeline = document.querySelector(".tweets-timeline")

buttonCreateTweet.addEventListener("click", function(e){
    e.preventDefault();

    if(inputTweet.value === undefined || inputTweet.value === null || inputTweet.value === "" || inputTweet.value === " "){
        return false;
    }

    //criei a div que abraça todo o conteúdo
    const div = document.createElement("div")
    div.className = "tweets-timeline__box";

    //criei o header
    const header = document.createElement("div");
    header.className = "tweets-timeline__header";
    header.innerHTML = `<span class="tweets-timeline__name">Isabelle Galvão</span>\
        <span class="tweets-timeline__username">@galvaoiisabelle</span>\
        <span class="tweets-timeline__date">1 de ago</span>`

//criei um elemento novo pro tweet

const newTweetP = document.createElement("p")
newTweetP.className = "tweets-timeline__tweet"
//passei o conteudo do tweet pro paragrafo
newTweetP.innerHTML = inputTweet.value 

const footer = document.createElement("div")
footer.className = "tweets-timeline__tweet"
footer.innerHTML = '<button class="tweets-timeline__delete-button button">Excluir</button>'

//coloquei o header + texto do tweet na div
div.appendChild(header)
div.appendChild(newTweetP)
div.appendChild(footer)

//coloquei a div na timeline
tweetsTimeline.insertBefore(div, tweetsTimeline.childNodes[0])

inputTweet.value = "";

const botaoExcluir = document.querySelector(".tweets-timeline__delete-button")

botaoExcluir.addEventListener("click", function(evento){
    evento.preventDefault()
    div.remove()

    })
})

////////// CÓDIGO JULIA //////////

// const button = document.querySelector(".tweet-composer__button")

// button.addEventListener("click", function(event){
//     event.preventDefault()

//    //Aqui eu criei a caixa de texto do novo twitte e falei que ela viria antes do 
//    //primeiro filho que é o twitter que já está lá
//     const twitter = document.createElement("div")
//     const tweetsTimeline = document.querySelector(".tweets-timeline")
    
    
//     //Aqui eu criei a leitura do twitter, que vai ser um texto
//     //na textArea (campo de texto), que depois vai pra dentro do
//     //twitter, que é a div nova, a caixa de texto nova... Essa
//     //caixa de texto nova terá um texto(parágrafo) que irá pra dentro da TextArea.
//     const textTwitter = document.querySelector(".tweet-composer__input")
//     const textArea = document.createTextNode(textTwitter.value)
//     const paragrafo = document.createElement("p")
//     const div = document.createElement("div")

//     const header = document.createElement("div")
//     header.innerHTML = '<div class="tweets-timeline__header">\
//     <span class="tweets-timeline__name">ana.js</span>\
//     <span class="tweets-timeline__username">@naluhh</span>\
//     <span class="tweets-timeline__date">1 de ago</span>\
//     </div>'

//     twitter.appendChild(paragrafo)
//     paragrafo.appendChild(textArea) 
//     div.appendChild(header)

//     tweetsTimeline.insertBefore(div, tweetsTimeline.children[0]);
    
// })