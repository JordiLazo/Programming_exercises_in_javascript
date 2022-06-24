//generate random number between a range
function randomRangeNumber(myMin,myMax){
    return Math.floor(Math.random()*(myMax - myMin + 1)) + myMin;
}
var myRandom = randomRangeNumber(5,10);
console.log(myRandom)

