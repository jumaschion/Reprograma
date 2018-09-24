const button = document.querySelector("button")
const link = document.getElementById("externo")
const artigo = document.querySelector(".article")



button.addEventListener("click", function(e){
    e.preventDefault()

    for (let i = 0; i < link.attributes.length; i++){
        let prop = document.createElement("p")
        prop.innerHTML = (`${link.attributes[i].name} :${link.attributes[i].value}`)

        artigo.appendChild(prop)
    }  
})