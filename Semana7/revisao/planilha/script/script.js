const button = document.querySelector(".feedback__button")
const inputName = document.getElementById("feedbackInputName")
const inputCity = document.getElementById("feedbackInputCity")
const inputComment = document.getElementById("feedbackInputComment")

button.addEventListener("click", function(e){
    e.preventDefault()
    
    if (inputName.value === undefined || inputName.value === "" || inputName.value === " " || inputName.value === null) {
        inputName.focus()
        console.log("Preencha o nome da empresa")
        return false
    }else  if (inputCity.value === undefined || inputCity.value === "" || inputCity.value === " " || inputCity.value === null) {
        inputCity.focus()
        console.log("Preencha a cidade")
        return false 
    } else if (inputComment.value === undefined || inputComment.value === "" || inputComment.value === " " || inputComment.value === null) {
        inputComment.focus()
        console.log("Preencha o feedback")
        return false 
    } else {
        console.log ("Feedback foi enviado com sucesso")
    }

    const respostas = document.querySelector(".respostas__table") //pega a parte das respostas pra depois criar nova linha e coluna nessa parte
    //criar linha
    const linha = document.createElement("tr")

    //criar coluna para cada item do form, com criação de nó de texto 
    const colunaEmpresa = document.createElement("td")
    const colunaEmpresaTexto = document.createTextNode(inputName.value)
    colunaEmpresa.appendChild(colunaEmpresaTexto)

    const colunaCity = document.createElement("td")
    const colunaCityTexto = document.createTextNode(inputCity.value)
    colunaCity.appendChild(colunaCityTexto)

    const colunaComment = document.createElement("td")
    const colunaCommentTexto = document.createTextNode(inputComment.value)
    colunaComment.appendChild(colunaCommentTexto)

    //adicionar as colunas em cada linha correspondente

    linha.appendChild(colunaEmpresa)
    linha.appendChild(colunaCity)
    linha.appendChild(colunaComment)

    //colocar a linha na tabela
    respostas.appendChild(linha)


    


})

