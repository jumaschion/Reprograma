const feedback__button = document.querySelector(".feedback__button")
const feedbackInputMessage = document.getElementById("feedbackInputMessage")
const testimonials = document.querySelector(".testimonials")


  feedback__button.addEventListener("click", function(event){
    event.preventDefault()
    alert("Feedback foi dado com sucesso!")

      const feedbackInputMessageTexto = document.createTextNode(feedbackInputMessage.value)
 
    testimonials.appendChild(feedbackInputMessageTexto);
  })