//Create class Game

class Tamagotchi {
    constructor( hunger, sleepiness, boredom, age){
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
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
        }, 120000)
    }

    //Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.

    increaseHunger() {
        setInterval(() => {
            this.hunger++
        }, 60000)
    }

    increaseSleepiness() {
        setInterval(() => {
            this.sleepiness++
        }, 60000)
    }

    increaseBored() {
        setInterval(() => {
            this.boredom++
        }, 120000)
    }

}

let tama1 = new Tamagotchi(5, 5, 5, 0);
console.log(tama1)

while(tama1.hunger != 10 || tama1.boredom != 10 || tama1.sleepiness !=10){
    tama1.increaseAge()
    tama1.increaseBored()
    tama1.increaseHunger()
    tama1.increaseSleepiness()
}