const links = document.querySelector(".gallery__nav")
const title = document.querySelector(".gallery__caption")


for (let i = 0; i < links.children.length; i++){

links.children[i].addEventListener("click", function(){
  const img = this.dataset.image
  const title = this.dataset.title

//   console.log(img)
  document.querySelector(".gallery__image").src = img
  document.querySelector(".gallery__caption").textContent = title
  })
}


