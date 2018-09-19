const links = document.querySelector(".gallery__nav")

for (let i = 0; i < links.children.length; i++){

links.children[i].addEventListener("click", function(){
  const img = this.dataset.image
  // console.log(img)
  document.querySelector(".gallery__image").src = img
  })
}
