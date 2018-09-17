// const titulo = document.getElementById("formTitle");
// const titulo2 = document.querySelector(".news__title");

// console.log(titulo)
// console.log(titulo2)


const input = document.getElementById ("newsInputEmail");
const botao = document.querySelector (".news__button");

botao.addEventListener("click", function(event){
    event.preventDefault();
    const email = input.value;

    alert(`O e-mail ${email} tal foi cadastrado com sucesso!`)
})