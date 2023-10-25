//Creater Hamster Class
class Hamster
{
//attributes:
// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
    constructor(owner='',name){
        this.name=name;
        this.price=15;
        this.owner=owner;
    }
// methods:
// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price    

    wheelRun(){
        console.log('squeak squeak')
    }

    eatFood(){
        console.log('nibble nibble')
    }

    getPrice(){
        return this.price
    }
}
//commited till here with message "Created Hamster class"

//Creating Person Class

class Person{
    constructor(name){
      this.name=name;
    }
    age = 0;
    height = 0;
    weight = 0;
    mood = 0;
    hamsters = [];
    bankaccount = 0;
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(name){
        console.log("Hello ",name);
    }
    eat(){
        this.weight++;
        this.mood++;
    }
    exercise(){
        this.weight--;
    }
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankaccount+=10
    }
    buyHamster(hamster){
        this.hamster.push(hamster);
        this.mood+=10;
        this.bankaccount-=hamster.getPrice();
    }
}      