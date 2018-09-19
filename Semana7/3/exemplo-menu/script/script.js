const buttonMenu = document.querySelector(".sidebar-menu__button")
const sidebar = document.querySelector(".sidebar-menu")

buttonMenu.addEventListener("click", function(){
   
      if (sidebar.style.marginLeft === "-430px"){
          sidebar.style.marginLeft = "0px"
      } else {
      sidebar.style.marginLeft = "-430px"
      }
})

// let counter = 1

// buttonMenu.addEventListener("click", function(){

// sidebar.style.left = "-435px"
// counter++
// if (counter % 2 != 0) {
//   sidebar.style.left = "0px"
// }
// })

// if (sidebar.style.left == "-430px") {
//     sidebar.style.left = "0px"
//     sidebar.setAttribute (
//         "style", font-size; 100px; font-style: italic; color #fffff;"
// })
// para atribuit mais elementos