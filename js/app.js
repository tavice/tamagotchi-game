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


//0 Start the game
//1 - Create a new Tamagotchi using Prompt

startGame.addEventListener('click', (e) =>{
    e.preventDefault()
    let tamaName = prompt("Enter the name of your Tamagotchi");
    let tama1 = new Tamagotchi(tamaName)

  //Add tamagotchi name  
    let tamaNameText = document.querySelector('#tamaName')
    tamaNameText.innerHTML = 'Your tamagotchi name is: ' + tama1.name

 
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
            if(tama1.hunger < 10){

                hungerResult.innerHTML = tama1.hunger
            } else{
                hungerResult.innerHTML = "not enough food"
                alert('your tamagotchi is dead')
            }   
            
            
            // Sleepiness (1-10 scale) 
            if(tama1.sleepiness < 10){

                sleepinessResult.innerHTML = tama1.sleepiness
            } else{
                sleepinessResult.innerHTML = "not enough sleep"
                alert('your tamagotchi is dead')
            }
            
            // Boredom (1-10 scale)
            if(tama1.boredom < 10){

                boredomResult.innerHTML = tama1.boredom
            } else {
                boredomResult.innerHTML = "Tamagotchi is too bored"
                // alert('your tamagotchi is dead')
                // let answer = prompt('Would you like to play again (YES) or (NO)')
                // if(answer === 'YES'){
                //     window.location.reload()
                // } else if ( answer === 'NO'){
                //     window.close()
                // } else {
                //     prompt('Would you like to play again (YES) or (NO)')
                // }
            }
            
            // Age 
            ageResult.innerHTML = tama1.age


            //SAD FACE
            sadFace()

            //STOP THE GAME
            stopGame()


        }, 1000);

    }
    
    //STOP THR GAME
     function stopGame(){
        if(tama1.hunger >10){
            clearInterval(displayResult())
            alert('your tamagotchi is dead')
        }
    }

    function sadFace(){
        if(tama1.hunger >5 || tama1.boredom >  5 || tama1.sleepiness > 5){

            document.querySelector('.face').className ='sadface'
            document.querySelector('.mouth').className ='mouthSad'
            document.querySelector('.left-eye').className ='left-eye-sad'
            document.querySelector('.right-eye').className ='right-eye-sad'
        } else {

            document.querySelector('.sadface').className ='face'
            document.querySelector('.mouthSad').className ='mouth'
            document.querySelector('.left-eye-sad').className ='left-eye'
            document.querySelector('.right-eye-sad').className ='right-eye'

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

