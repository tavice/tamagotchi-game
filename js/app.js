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
            if (this.hunger === 10){
                this.stop(this.increaseHunger);
            }
        }, 2000)
    }

    increaseSleepiness() {
        
        setInterval(() => {
            this.sleepiness++;
            if (this.sleepiness === 10){              //if it goes above 10 the function will stop
                this.stop(this.increaseSleepiness);
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

let startGame = document.querySelector('#startGame')
startGame.addEventListener('click', (e) =>{
    e.preventDefault()
    let tamaName = prompt("Enter the name of your Tamagotchi");
    let tama1 = new Tamagotchi(tamaName)

 
 //start to increase the values:

    tama1.increaseAge()
    tama1.increaseBored()
    tama1.increaseHunger()
    tama1.increaseSleepiness()

  
    //2 - Change the value when you click on the buttons
    //Feed your Tamagotchi button
    
    
    let feedTamagotchiButton = document.querySelector('#feedPet')
    feedTamagotchiButton.addEventListener('click', (e) => {
        e.preventDefault()
        tama1.feedTamagotchi()
        displayResult()
        changePicture()
    })
    
    //Turn off the light button
    
    
    let turnOffLightButton = document.querySelector('#TurnOffLight')
    turnOffLightButton.addEventListener('click', (e) => {
        e.preventDefault()
        tama1.sleepTamagotchi()
        displayResult()
    })
    
    
    //Play with your Tamagotchi button
    
    let playPetButton = document.querySelector('#playPet')
    playPetButton.addEventListener('click', (e) => {
        e.preventDefault()
        tama1.playTamagotchi()
        displayResult()
    })
    
    
    
    
    // Display the following metrics for your pet:
    function displayResult (){
        // Hunger (1-10 scale)    
        
        let hungerResult = document.querySelector('#hungerResult')
        hungerResult.innerHTML = tama1.hunger
        
        // Sleepiness (1-10 scale)
        
        let sleepinessResult = document.querySelector('#sleepinessResult')
        sleepinessResult.innerHTML = tama1.sleepiness
        
        // Boredom (1-10 scale)
        
        let boredomResult = document.querySelector('#boredomResult')
        boredomResult.innerHTML = tama1.boredom
        
        // Age 
        
        let ageResult = document.querySelector('#ageResult')
        ageResult.innerHTML = tama1.age
        
    }


    //Change the image of your Tamagotchi when they grow up
   function changePicture (){
    if(tama1.age > 5){
        let newImage = document.querySelector('#tamaPic')
        newImage.src = './img/tiger.png'
    }}


   
})