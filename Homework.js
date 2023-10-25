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
