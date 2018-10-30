
const input_cpf = document.getElementById("cpfInput")


input_cpf.addEventListener("focus", function(){
        this.value = "___.___.___-__"
        
        setTimeout(function(){
        input_cpf.setSelectionRange(0,0)
    }, 10)
})  

    input_cpf.addEventListener("blur", function(){
        this.value = ""
    })

    input_cpf.addEventListener("keypress", function(e){
        e.preventDefault()
        if("0123456789".indexOf(event.key) != -1 
        && this.value.indexOf("_") != -1)

        this.value = this.value.replace(/_/,event.key);
        const next_index = this.value.indexOf("_")
        this.setSelectionRange(next_index, next_index)

})




    

  
