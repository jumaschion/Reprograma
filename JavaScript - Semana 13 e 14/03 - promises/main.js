// aqui.
const input = document.getElementById("cep")
const endereco = document.getElementById("logradouro")
const complemento = document.getElementById("complemento")
const bairro = document.getElementById("bairro")
const localidade = document.getElementById("localidade")
const uf = document.getElementById("uf")
const erro = document.getElementById("cep-error")

// input.addEventListener("focus" , function(event) {
//     input.value = "_____-___"
//     setTimeout(function() {
//         input.setSelectionRange(0, 0)
//     }, 1)

// })

// input.addEventListener("blur" , function() {
//     if   (this.value === "_____-___") {
//         this.value = ""
//      }
// })

// input.addEventListener("keydown", function(event) {
//     event.preventDefault()
//     if("0123456789".indexOf(event.key) !== -1
//         && this.value.indexOf("_") !== -1) {
//             this.value = this.value.replace(/_/, event.key)
//             const next_index = this.value.indexOf("_")
//             this.setSelectionRange(next_index, next_index)
//     } else if (event.key === "Backspace") {
//         this.value = this.value.replace(/(\d$)|(\d(?=\D+$))/, "_")
//         const next_index = this.value.indexOf("_")
//         this.setSelectionRange(next_index, next_index)
//     }
// })


input.addEventListener("focus", function(){
   input.classList.remove("error")
   erro.style.display = "none"
   this.value =""

})


input.addEventListener("blur", function(){
    const cep = this.value.replace(/\D/g, "")

    endereco.value ="..."
    complemento.value = "..."
    bairro.value = "..."
    localidade.value = "..."
    uf.value = "..."

    get_data(`http://viacep.com.br/ws/${cep}/json/`)

    
    .then(function(data) {
        
        const json = JSON.parse(data)
        console.log(json)
        endereco.value = json.logradouro
        complemento.value = json.complemento
        bairro.value = json.bairro
        localidade.value = json.localidade
        uf.value = json.uf
       
        })
        .catch(function(error) {
        
                input.classList.add("error")
                erro.style.display = "block"
            
            

                endereco.value =""
                complemento.value = ""
                bairro.value = ""
                localidade.value = ""
                uf.value = ""
            
           
        })
})

     



