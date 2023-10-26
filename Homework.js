//Creater Hamster Class
class Hamster
{
//attributes:
// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
    constructor(name){
        this.name=name;
    }
        price=15;
        owner='';
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

    setOwner(name){
        this.owner=name;
    }
}
//commited till here with message "Created Hamster class"

//Creating Person Class

class Person{
    constructor(name){
    this.name = name;
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
    //ageUp() - increment age, increment height, increment weight,
    // decrement mood, increment bank account by 10 (birthday money)
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankaccount+=10
    }
    //buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, 
    //decrement bankAccount by the value of the hamster (hint: use getPrice())
    buyHamster(newhamster){
        this.hamsters.push(newhamster);
        this.mood+=10;
        this.bankaccount = this.bankaccount - (newhamster.getPrice());
    }
}  
//commited till here with message "Created Hamster class"

//Create a Story with your Person class
//Instantiate a new Person named Timmy
const Timmy=new Person('Timmy');
//Age Timmy five years
Timmy.getAge(5);
// Have him eat five times.//Have him exercise five times
for(let i=0;i<5;i++){
    Timmy.eat()
    Timmy.exercise()
}
//Age Timmy 9 years
Timmy.getAge(9);
//Create a hamster named "Gus" //Set Gus's owner to the string "Timmy"
const gus =new Hamster('Gus')
gus.setOwner(Timmy.getName());
//Have Timmy "buy" Gus
Timmy.buyHamster('gus')
//Age Timmy 15 years
Timmy.getAge(15)
//Have Timmy eat twice
for(let i=1; i<=2; i++) {
    Timmy.eat();
    Timmy.exercise();
}
console.log(Timmy)
//commited till here with message "Created Timmy's Story"







