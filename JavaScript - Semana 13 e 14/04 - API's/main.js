const input = document.getElementById("input")
const result = document.getElementById("results")

input.addEventListener("keydown", function(){
   
        result.innerHTML = `<img id="loading" src="loading.gif">`
      
    get_data(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${input.value}&type=video&key=${gkey}`) //dentro dessa API já tem os items, snippets, thumbnails, videos, ID etc
        .then(function(data) {
            data = JSON.parse(data) //Função que transforma as strings em objetos, vai transformar o API em objetos
            //como essa função toda é uma promise, ele já sabe que tem que acessar o get_data, eu poderia dar outro
            //nome para o "data", que não mudaria nada.
           
            result.innerHTML = "" //Aqui ele vai limpar tudo que tem na pesquisa, ANTES de mostrar nova pesquisa
            //NÃO VAI ACUMULAR RESULTADO DE PESQUISAS ANTERIORES    .
            
            if (input.value.length === 0){ //Aqui ele vai limpar a pesquisa SE INPUT FOR VAZIO OU APAGADO
                result.innerHTML = ""
            } else {
                result.innerHTML = "<p>Nenhum resultado encontrado</p>" 
            }

            for (const item of data.items){ //para loopar cada item de array ou string
                result.innerHTML +=  // Aqui eu coloco o resultado com a constante que criei lá em cima"result" no HTML, o "+-" serve para ele pesquisar mais de uma vez, sem sobescrever o result.HTML.
                // A gente quer que o INNERHTML seja ele mesmo + um novo vídeo.
                `<a href="https://www.youtube.com/watch?v=${item.id.videoId}">  
                <img src="${item.snippet.thumbnails.default.url}"</img>
                <h1>${item.snippet.title}</h1>
                <p>${item.snippet.description}</p></a>`  //Aqui tem todoas as informações que constam na API, no link do
                //youtube ele tem template string para a pessoa conseguir acessar qualquer vídeos que ela
                //pesquisar.
            } 
        })

        .catch(function(error) {
            result.innerHTML = `<p>${error}/p>` //Aqui já tem uma variável chamada error, que é padrão do PRROMISE JavaScript
        })
})
