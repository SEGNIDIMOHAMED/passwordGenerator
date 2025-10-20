
// let player= {
//     name:"mohamed",
//     checks: 180
// }

// let sum = 0
// let hasBlackJack= false
// let isAlive = false
// let message = ""
// let messagel = document.querySelector(".message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
// let cards = []
// let playerEl= document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.checks

// function getRandomCard(){
//     let randomCard = Math.floor( Math.random()*13 ) +1
//     if (randomCard>=11){
//         return 10
//     }else if (randomCard===1){
//         return 11
//     }else{
//         return randomCard
//     }
     
// }

// function startGame(){
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = cards[0] + cards[1]
//     renderGame()
// }
// function renderGame(){
//     cardsEl.innerText = "Cards: "
//     for (let i = 0 ; i < cards.length ; i++ ){
//         cardsEl.textContent += cards[i] + " "
//     }



//     sumEl.innerText =  "Sum: " + sum 
//     if (sum <=20 ){
//     message = "Do you want to draw a new card?"
    
// }else if (sum === 21){
//     message= "Wohoo! You've got Blackjack!"
//     hasBlackJack=true

    
// }else {
//     message = "You're out of the game!"
//     isAlive = false
// }
// messagel.innerText = message 


// }







// function newCard() {
    
    
//     if ( isAlive===true && hasBlackJack===false){
//         let card = getRandomCard()
//         sum += card
//         cards.push(card)
//         renderGame()
//     }
   


// }
















// // console.log(4 === 3)// false
// // console.log( 5 > 2)// true
// // console.log(12 > 12) // false
// // console.log(3 < 0) // false
// // console.log(3>=3) // true
// // console.log(11 <= 11) // true
// // console.log(3 <= 2) // false


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