//Query Selector:

let feedTamagotchiButton = document.querySelector('#feedPet')
let turnOffLightButton = document.querySelector('#TurnOffLight')
let playPetButton = document.querySelector('#playPet')
let hungerResult = document.querySelector('#hungerResult')
let boredomResult = document.querySelector('#boredomResult')
let sleepinessResult = document.querySelector('#sleepinessResult')
let ageResult = document.querySelector('#ageResult')
let startGame = document.querySelector('#startGame')

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
            if (hungerResult === 10){
                stop(increaseHunger);
            }
        }, 2000)
    }

    increaseSleepiness() {
        
       let sleepInterval = setInterval(() => {
            this.sleepiness++;
            if (sleepinessResult === 10){              //if it goes above 10 the function will stop
                stop(sleepInterval);
            }
        }, 2000)

       
    }

    increaseBored() {
        
        setInterval(() => {
            this.boredom++;
            if (this.boredom === 10){
                this.stop(this.increaseBored);
            }
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
            hungerResult.innerHTML = tama1.hunger
            
            
            // Sleepiness (1-10 scale) 
            sleepinessResult.innerHTML = tama1.sleepiness
            
            // Boredom (1-10 scale)
            boredomResult.innerHTML = tama1.boredom
            
            // Age 
            ageResult.innerHTML = tama1.age


        }, 1000);
        
    }

   
    


   

    

    


   
})