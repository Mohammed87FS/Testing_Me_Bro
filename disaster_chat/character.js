class Character {

    constructor(name, description, message, health = 100) {
        this.name = name;
        this.health = health;
        this.description = description;
        this.message = message;
    }   

    getName(){
        return this.name;
    }

    getHealth(){ 
        return this.health;
    }

    getDescription(){
        return this.description;    
    }
    getMessage(){
        return this.message;
    }

    attacks(anotherCharacter){
        if (anotherCharacter) {
            console.log(this.name + " attacks " + anotherCharacter.getName() + "!");
            anotherCharacter.health -= 10;   
            console.log(anotherCharacter.getName() + " has " + anotherCharacter.getHealth() + " health left!");
        } else {
            console.log(this.name + " attacks!");
        }
    }

    defend(){
        console.log(this.name + " defends!");     
    }

    callForHelp(helperCharacter){
     if(helperCharacter &&  typeof helperCharacter.defend === 'function'){
       
        console.log(`${this.name} calls for help!`);

        helperCharacter.defend();
     }
           
    }

}

const Zaid = new Character("Zaid", "a good guy", "i hate stuff");
const Sonic = new Character("Sonic", "A blue hedgehog with super speed.", "Hello, Zaid! Welcome to the JavaScript world! I hate teamers");
const Knuckles = new Character("Knuckles", "A red echidna with spiked knuckles", "Hey Zaid, I'm Knuckles! Let's go on an adventure together!");
const Tails = new Character("Tails", "A yellow fox with two tails", "Hi Zaid! I'm Tails! Let's fly together!");
const Shadow = new Character("Shadow", "A black hedgehog with red stripes", "Zaid, I'm Shadow! I will protect you!");
const Amy = new Character("Amy", "A pink hedgehog with a hammer", "Hi Zaid! I'm Amy! Let's go on a quest together!");
const Eggman = new Character("Eggman", "A villainous scientist with a plan to take over the world", "Zaid, I'm Eggman! I'll stop you!");
const SonicEXE = new Character("SonicEXE", "A dark version of Sonic", "Zaid, I'm SonicEXE! Let's play a game together!");

console.log(Zaid.attacks(Sonic));
console.log(Zaid.attacks(Knuckles));
console.log(Knuckles.attacks(Eggman));
console.log(Zaid.attacks(Tails));
console.log(Zaid.attacks(Shadow));

module.exports= Character;