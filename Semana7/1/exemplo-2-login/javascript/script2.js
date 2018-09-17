const botao = document.querySelector(".login__button")

botao.addEventListener("click", function(event){
  event.preventDefault();
  const email= document.querySelector(".login__input").value

  const loginForm = document.querySelector (".login__form");
  loginForm.innerHTML = `Login efetuado com sucesso com o e-mail ${email} !! c:`;
})


  const input = document.getElementById("loginInputEmail")
  const botao = document.querySelector(".login__button")

  botao.addEventListener("click", function (event) {
    event.preventDefault();

      //create element cria novos elementos
    const resposta = document.createElement("span")
  
      //create text node cria nós de texto
    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");

      //append child insere item dentro de um elemento
    resposta.appendChild(respostaMensagem);
    
    const newsForm = document.querySelector (".login__form");

      // insert before, insere item em um elemento antes de um item estabelecido
    newsForm.insertBefore(resposta, newsForm.childNodes[0]);
  } )