
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
    "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",
    "y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
    "(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let passOne = document.getElementById("pass1")
let passTwo = document.getElementById("pass2")



function generatePassword(){
    passOne.textContent=""
    passTwo.textContent=""
    for (let i = 0; i < 15; i++ ){
    let randomIndex = Math.floor(Math.random()*characters.length)
     passOne.textContent += characters[randomIndex]
    
}
  for (let i = 0; i < 15; i++ ){
    let randomIndex = Math.floor(Math.random()*characters.length)
    passTwo.textContent += characters[randomIndex]
}

}

function copyToClipBoard(){
    let copieText= document.getElementById("pass1")
    copieText.select()
    navigator.clipboard(copieText.value)
}
