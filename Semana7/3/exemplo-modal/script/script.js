const button = document.querySelector(".login__button")
const buttonClose = document.querySelector(".login-modal__button-close")
// const loginModal = document.querySelector(".login-modal")

button.addEventListener("click", function(event){
  event.preventDefault()
  document.querySelector(".login-modal").style.display="flex"
})

buttonClose.addEventListener("click", function(event){
  event.preventDefault()
  document.querySelector(".login-modal").style.display="none"
})
  