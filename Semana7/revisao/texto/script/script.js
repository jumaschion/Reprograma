const buttonZoomIn = document.querySelector(".btn__zoomin")
const buttonZoomOut = document.querySelector(".btn__zoomout")


function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "1.0em";
    }
        document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
    } 

buttonZoomIn.addEventListener("click", function(e){
    e.preventDefault()
        resizeText(1) 
})
buttonZoomOut.addEventListener("click", function(e){
    e.preventDefault()
        resizeText(-1)

})
    