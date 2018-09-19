const inputNome = document.getElementById("cadastroInputNome")
const inputEmail = document.getElementById("cadastroInputEmail")
const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm")
const inputPassword = document.getElementById("cadastroInputPassword")
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm")
const inputPhone = document.getElementById("cadastroInputPhone")
const inputArea = document.getElementById("cadastroInputArea")
const inputLevel = document.getElementById("cadastroInputLevel")
const inputNews = document.getElementById("cadastroInputNews")
const button = document.querySelector(".cadastro__button")

button.addEventListener("click", function (event) {
    event.preventDefault()
    // const optionSelected = inputArea.options[inputArea.selectedIndex]

    if (inputNome.value === undefined || inputNome.value === null ||
        inputNome.value === "" || inputNome.value === " ") {
        inputNome.focus()
        return false
    } else if (inputEmail.value === undefined || inputEmail.value === null ||
        inputEmail.value === "" || inputEmail.value === " ") {
        inputEmail.focus()
        return false
    } else if (inputEmailConfirm.value === undefined || inputEmailConfirm.value === null ||
        inputEmailConfirm.value === "" || inputEmailConfirm.value === " ") {
        inputEmail.focus()
        return false
    } else if (inputPassword.value === undefined || inputPassword.value === null ||
        inputPassword.value === "" || inputPassword.value === " ") {
        inputPassword.focus()
        return false
    } else if (inputPasswordConfirm.value === undefined || inputPasswordConfirm.value === null ||
        inputPasswordConfirm.value === "" || inputPasswordConfirm.value === " ") {
        inputPasswordConfirm.focus()
        return false
    } else if (inputPhone.value === undefined || inputPhone.value === null ||
        inputPhone.value === "" || inputPhone.value === " ") {
        inputPhone.focus()
        return false
    } else if (inputArea.value === undefined || inputArea.value === null ||
        inputArea.value === "" || inputArea.value === " ") {
        inputArea.focus()
        return false
    } else if (inputEmail.value !== inputEmailConfirm.value) {
        inputEmail.focus()
        alert("Verifique o e-mail de confirmação")
        return false
    } else if (inputPassword.value !== inputPasswordConfirm.value || inputPassword.value.length <= 7) {
        inputPassword.focus()
        alert("A senha está errada, ou tem menos de 7 dígitos!")
        return false
    } else if (inputNews.checked === false) {
        alert("É uma pena que você não deseja receber nosso conteúdo exclusivo :c")
    }

    let radioItem
    for (let i = 0; i < inputLevel.length; i++) {
        if (inputLevel[i].checked) {
            console.log(inputLevel[i])
            radioItem = inputLevel[i]
        }
    }

    if (radioItem.value === "Junior") {
        console.log("0 - 2 anos de experiência;")
    } else if (radioItem.value === "Pleno") {
        console.log("2 - 5 anos de experiência;")
    } else if (radioItem.value === "Sênior") {
        console.log("5+ de experiência")
    }
    alert("Deu certo!")
    document.querySelector("body").style.backgroundColor = "#fff"
    const form = this.closest("form")
    form.submit()
})

inputArea.addEventListener("change", function (changebg) {
    changebg.preventDefault()

    if (inputArea.value === "Front-End") {
        document.querySelector(".wrapper").style.backgroundColor = "blue"
    }
    else if (inputArea.value === "Back-End") {
        document.querySelector(".wrapper").style.backgroundColor = "green"
    }
    else if (inputArea.value === "UX Designer") {
        document.querySelector(".wrapper").style.backgroundColor = "pink"
    }
    else if (inputArea.value === "UI Designer") {
        document.querySelector(".wrapper").style.backgroundColor = "orange"
    }
    else if (inputArea.value === "Selecione") {
        document.querySelector(".wrapper").style.backgroundColor = "white"
    }
})

inputEmailConfirm.addEventListener("paste", function (event){
    event.preventDefault()
    return false
})


