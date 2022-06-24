const s = [5,7,2];
function editInPlace(){
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);

function freezeObj(){
    
    const MATH_CONSTANTS = {
        PI:3.14
    }
    Object.freeze(MATH_CONSTANTS);

    try{
        MATH_CONSTANTS.PI = 99;
    }catch (ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

//anonymus function
var magic = function(){
    return new Date();
}

const numberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squaredIntegers;
}
const squaredIntegers = squareList(numberArray);
console.log(squaredIntegers);