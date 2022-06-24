const createPerson = (name,age,gender)=>({name,age,gender});
console.log(createPerson("Jordi",56,"male"));

//DECLARATIVE FUNCTIONS
const bicycle = {
    gear: 2,
    setGear(newGear){
        "use strict";
        this.gear = newGear;
    }
}
bicycle.setGear(3);
console.log(bicycle.gear)

//CLASS SYNTAX
class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet)

function makeClass2(){
    class Vegetable{
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable
}

const Vegetable = makeClass2();
const carrot = new Vegetable('carrot');
console.log(carrot.name)

//GETTER and SETTER
class Book{
    constructor(author){
        this._author = author;
    }
    //Getter
    get writer(){
        return this._author;
    }
    //Setter
    set writer(updateAuthor){
        this._author = updateAuthor;
    }
}
function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = 5/9*(temp-32);
        }
        //Getter
        get temper(){
            return this._temp;
        }
        //Setter
        set temper(newTemp){
            this._temp = newTemp;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temper;
thermos.temper = 26;
temp = thermos.temper
console.log(temp)