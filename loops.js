//while
var whileArray = [];

var i = 0;

while (i < 5){
    whileArray.push(i);
    i++;
}
console.log(whileArray)

//for
var forArray = [];
for (var i = 1; i < 6; i++){
    forArray.push(i);
}
console.log(forArray) 

//for (double array)
function multiplyAll(arr){
    var product = 1;
    
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length;j++){
            product *= arr[i][j];
        }
    }
    return product;
}
var for2Array = [[1,2],[3,4],[5,6,7]];
var product = multiplyAll(for2Array)
console.log(product)
console.log(for2Array.length)

//do while
var doArray = [];
var i = 10;

do{
    doArray.push(i);
    i++;
}while(i < 5)
console.log(i,doArray);

//profile lookup
var contacts = [
    {
        "firstName":"Akira",
        "lastName":"Laine",
        "number": "0543236543",
        "likes":["Pizza","Coding","Brownie Points"]
    },
    {
        "firstName":"Harry",
        "lastName":"Potter",
        "number": "0994372684",
        "likes":["Hogwarts","Magic","Hagrid"]
    },
    {
        "firstName":"Sherlock",
        "lastName":"Holmes",
        "number": "0487345643",
        "likes":["Intriguing Cases","Violin"]
    },
    {
        "firstName":"Kristian",
        "lastName":"Vos",
        "number": "unknown",
        "likes":["Javascript","Gaming","Foxes"]
    }
]

function lookUpProfile(name,prop){
    for(var i = 0; i< contacts.length; i++){
        if(contacts[i].firstName === name){
                return contacts[i][prop] || "No such property"
        }
    }
    return "No such contact"
}

var data = lookUpProfile("Akira","likes");
console.log(data);