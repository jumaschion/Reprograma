// Escreva uma função
// em Javascript que recebe
// um nome, um pronome e um objeto
// e retorna "<nome> foi caminhar
// no parque. <pronome> encontrou
// <objeto>. <nome> decidiu levar
// <objeto> pra casa."

function texto (nome, pronome, objeto){
   
    return `${nome} foi caminhar 
    no parque. ${pronome} encontrou um
     ${objeto}, ${nome} decidiu levar o
    ${objeto} pra casa.`
}

texto ("Maria", "ela", "chinelo")


// Escreva uma função
// em Javascript que recebe
// um número qualquer e retorna
// a raiz quadrada dele.

function raiz(x) {
    return Math.sqrt(x)
}


// Escreva uma função em
// Javascript que recebe um
// número qualquer e retorna
// a representação binaria dele.

function binaryConvert(x) {
    
    if (x!= Math.floor(x)) {
      console.log("Please enter a number")
      
    } else if (x < 0) {
      console.log("Please enter a positive number")
    
    } else {
      var binary = parseInt(x, 10)
      console.log(binary.toString(2))
      
    }
  }
    binaryConvert()




// Escreva uma função em Javascript
// que recebe uma lista de números
// e retorna o maior número da lista.


 function retornar_o_maior(arr) {
    {
        return Math.max(...arr)
    }
 }


// Escreva uma função em Javascript
// que vai checar se duas ou mais strings
// sao anagramas umas das outras.


function checkAnagram (str1, str2) {
        if(str1.length !== str2.length){
            return false;
        }

    var str1 = str1.split('').sort().join('')
    var str2 = str2.split('').sort().join('')
        
       if(str1 === str2){
           return true
       } else {
           return false
    }
}


// Escreva uma função em Javascript
// que recebe o raio de um circulo
// e calcula o diametro, a circunferencia
// e a area dele.

 function calculoCirculo (radius) {
     const 2 * math.pi * radius
     const 
     
 }