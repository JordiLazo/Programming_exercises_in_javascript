function nextInLine(arr,item){
    arr.push(item)
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr))
console.log(nextInLine(testArr,6));
console.log("After: "+ JSON.stringify(testArr));

//strict equal ===
function testStrict(a,b){
    if(a === b){
        return "Equal";
    }
    return "Not equal"
}
function testEqual(a,b){
    if(a == b){
        return "Equal";
    }
    return "Not equal"
}

console.log(testStrict(10,"10"))
console.log(testEqual(10,"10"))

//Switch statement
function caseInSwitch(val){
    var answer = "";

    switch(val){
        case 1:
            answer = "alpha"
            break;
        case 2:
            answer = "beta"
            break;
        case 3:
            answer = "gamma"
            break;
        case 4:
            answer = "delta"
            break;
    }
    return answer
}
console.log(caseInSwitch(2))