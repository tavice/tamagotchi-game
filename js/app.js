//Query Selector:

let feedTamagotchiButton = document.querySelector('#feedPet')
let turnOffLightButton = document.querySelector('#TurnOffLight')
let playPetButton = document.querySelector('#playPet')
let hungerResult = document.querySelector('#hungerResult')
let boredomResult = document.querySelector('#boredomResult')
let sleepinessResult = document.querySelector('#sleepinessResult')
let ageResult = document.querySelector('#ageResult')
let startGame = document.querySelector('#startGame')
let faceSelector = document.querySelector('.face')
let marqueetrigger = document.getElementById('#myMarquee')

//Create class Game

class Tamagotchi {
    constructor(name){
        this.name = name
        this.hunger = 0
        this.sleepiness = 0
        this.boredom = 0
        this.age = 0
    }

    feedTamagotchi(){
        this.hunger --
    }

    sleepTamagotchi(){
        this.sleepiness --
    }

    playTamagotchi(){
        this.boredom --
    }
//Increase your pet's age every x minutes here it is every 2minutes
    increaseAge() {
        
        setInterval(() => {
            this.age++
        }, 2000)
    }

    //Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.

    increaseHunger() {
        
               setInterval(() => {
                this.hunger++;
            }, 2000)

            
    }

    increaseSleepiness() {
        
       setInterval(() => {
            this.sleepiness++;
            
        }, 2000)

       
    }

    increaseBored() {
        
        setInterval(() => {
            this.boredom++;
          
        }, 2000)
        
        
    }
    
    stop(functionToClear){
        clearInterval(functionToClear)
    }   
    
    
}

//00 KEEP THE TAMGOTCHI UNANIMATED

let marquee = document.getElementById("myMarquee");
marquee.stop();


//0 Start the game
//1 - Create a new Tamagotchi using Prompt

startGame.addEventListener('click', (e) =>{
    e.preventDefault()
    let tamaName = prompt("Enter the name of your Tamagotchi");
    let tama1 = new Tamagotchi(tamaName)

  //Add tamagotchi name  
    let tamaNameText = document.querySelector('#tamaName')
    tamaNameText.innerHTML = 'Your tamagotchi name is: ' + tama1.name
    marquee.start()

 
 //start to increase the values:

     displayResult()

    tama1.increaseAge()
    tama1.increaseBored()
    tama1.increaseHunger()
    tama1.increaseSleepiness()



  
    //2 - Change the value when you click on the buttons
    //Feed your Tamagotchi button
    
    
    
    feedTamagotchiButton.addEventListener('click', (e) => {
        e.preventDefault()
        tama1.feedTamagotchi()
        
        
    })
    
    //Turn off the light button
    
    
    
    turnOffLightButton.addEventListener('click', (e) => {
        e.preventDefault()
        tama1.sleepTamagotchi()
        
    })
    
    
    //Play with your Tamagotchi button
    
    
    playPetButton.addEventListener('click', (e) => {
        e.preventDefault()
        tama1.playTamagotchi()
        
    })
    
    
    
    
    // Display the following metrics for your pet:

    function displayResult(){
        setInterval(() => {

            // Hunger (1-10 scale)
            if(tama1.hunger < 11){

                hungerResult.innerHTML = tama1.hunger
            } else{
                
               alert("your tamagotchi is dead because it wasn't fed enough ... it lived: " + (tama1.age -1) + ' years')
               let answer = prompt('Would you like to play again? Answer: (YES) or (NO)')
                           if(answer === 'YES'){
                               window.location.reload() 
                           } else if ( answer === 'NO'){
                               window.close()
                           } else {
                               prompt('Would you like to play again (YES) or (NO)')
                           }
                hungerResult.innerHTML = "not enough food"
                clearInterval(displayResult())
                

            
            }   
            
            
            // Sleepiness (1-10 scale) 
            if(tama1.sleepiness < 11){

                sleepinessResult.innerHTML = tama1.sleepiness
            } else{
                
                alert("your tamagotchi is dead because it didn't sleep enough... it lived: " + (tama1.age -1) + ' years')
                let answer = prompt('Would you like to play again? Answer: (YES) or (NO)')
                           if(answer === 'YES'){
                               window.location.reload() 
                           } else if ( answer === 'NO'){
                               window.close()
                           } else {
                               prompt('Would you like to play again (YES) or (NO)')
                           }
                sleepinessResult.innerHTML = "not enough sleep"
                clearInterval(displayResult())
                
            }
            
            // Boredom (1-10 scale)
            if(tama1.boredom < 11){

                boredomResult.innerHTML = tama1.boredom
            } else {
                
                alert("your tamagotchi is dead because it didn't play enough... it lived: " + (tama1.age -1) + ' years')
                let answer = prompt('Would you like to play again? Answer: (YES) or (NO)')
                           if(answer === 'YES'){
                               window.location.reload() 
                           } else if ( answer === 'NO'){
                               window.close()
                           } else {
                               prompt('Would you like to play again (YES) or (NO)')
                           }
                boredomResult.innerHTML = "Tamagotchi is too bored"
                clearInterval(displayResult())
               
            
            }
            
            // Age
            if(tama1.hunger < 11 && tama1.sleepiness < 11 && tama1.boredom < 11){

                ageResult.innerHTML = tama1.age
            } else {
                marquee.pause()
                clearInterval(displayResult())
            }


            //SAD FACE
            sadFace()


            //EVOLVE or MORPH FACE
            morphPet()

            //STOP MARQUEE
            stopMarquee()

            //STOP THE GAME
            //stopGame()


        }, 1000);

    }
    
    //STOP THE GAME 
    //  function stopGame(){
    //     if(tama1.hunger >= 10 || tama1.sleepiness >= 10|| tama1.boredom >= 10){
    //         marquee.pause()
    //         clearInterval(displayResult())
    //         alert('your tamagotchi is dead...' + ' it lived ' + (tama1.age -1) + ' years')
    //             let answer = prompt('Would you like to play again? Answer: (YES) or (NO)')
    //             if(answer === 'YES'){
    //                 window.location.reload() 
    //             } else if ( answer === 'NO'){
    //                 window.close()
    //             } else {
    //                 prompt('Would you like to play again (YES) or (NO)')
    //             }
    //     }
    // }

    function sadFace(){
        if((tama1.hunger >5 && tama1.hunger <= 9) || (tama1.boredom >  5 && tama1.boredom <= 9) || (tama1.sleepiness > 5 && tama1.sleepiness <= 9)){

            document.querySelector(".TamaEmoji").innerHTML = "????"

            // document.querySelector('.face').className ='sadface'
            // document.querySelector('.mouth').className ='mouthSad'
            // document.querySelector('.left-eye').className ='left-eye-sad'
            // document.querySelector('.right-eye').className ='right-eye-sad'
        } else if (tama1.hunger > 9 || tama1.boredom > 9 || tama1.sleepiness > 9){ document.querySelector(".TamaEmoji").innerHTML = "??????"}

            // document.querySelector('.sadface').className ='face'
            // document.querySelector('.mouthSad').className ='mouth'
            // document.querySelector('.left-eye-sad').className ='left-eye'
            // document.querySelector('.right-eye-sad').className ='right-eye'

            else{
                document.querySelector(".TamaEmoji").innerHTML = "????"
            }}

//Morph your pet at certain ages.

    function  morphPet(){
        if(tama1.age > 10 && (tama1.hunger <= 5 && tama1.boredom <= 5 && tama1.sleepiness <= 5)){
            document.querySelector(".TamaEmoji").innerHTML = "????"}
        else{
            sadFace()
        }
    }       

    //function to stop marquee when dead

    function stopMarquee(){
        if(tama1.hunger > 9 || tama1.boredom > 9 || tama1.sleepiness > 9){
            marquee.stop()

        }
    }
    
   
})






 //SAD FACE TEST

//  function sadFace(){
//         document.getElementById("SadModeText").innerText = ' Sad Face is ON'
//         document.querySelector('.face').className ='sadface'
//         document.querySelector('.mouth').className ='mouthSad'
//         document.querySelector('.left-eye').className ='left-eye-sad'
//         document.querySelector('.right-eye').className ='right-eye-sad'

    
// }


// INSTRUCTION PANEL

const button = document.getElementById("toggle-button");
const panel = document.getElementById("panel");

button.addEventListener("click", function() {
  if (panel.style.display === "none") {
    panel.style.display = "block";
    button.innerHTML =' ??????instructions above???? !!!'
  } else {
    panel.style.display = "none";
    button.innerHTML ='Need Instructions? ???? Click Here ! ????'
  }
});





