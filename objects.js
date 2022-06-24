var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails":1,
    "friends":["everything!"],
    130:"age"
}

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails":2,
    "friends":[]
}

console.log(ourDog)
console.log(ourDog.name);
console.log(ourDog[130]);
console.log(ourDog["friends"]);
console.log(myDog["legs"])
ourDog["city"]="Lleida";
console.log(ourDog);
delete ourDog.city;

function checkObject(property){
    if(ourDog.hasOwnProperty(property)){
        return ourDog[property];
    }else{
        return "This property do not exist"
    }
}
console.log(checkObject(130))

var myStorage = {
    "car":{
        "inside":{
            "glove box": "maps",
            "passenger seat":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

var collection = {
    "2548":{
        "album":"Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks":["Let it Rock","You give love a bad name"]
    },
    "2468":{
        "album":"1999",
        "artist":"Prince",
        "tracks":["1999","Little Red Corvette"]
    },
    "1245":{
        "artist":"Robert Palmer",
        "tracks":[]
    },
    "5439":{
        "album":"ABBA Gold"
    }
}

var collectionCopy = JSON.parse(JSON.stringify(collection))

function updateRecords(id,prop,value){

    if(value === ""){
        delete collection[id][prop];
    }else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }

    return collection;
}
updateRecords(2468,"tracks","test");
console.log(updateRecords(5439,"artist","ABBA"))