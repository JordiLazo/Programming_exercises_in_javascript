const increment = (function(){
    return function increment(number,value = 1){
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));

//REST OPERATOR

const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b)=> a+b,0);
    };
})();
console.log(sum(1,2,3,4));

//SPREAD OPERATOR

const arr1 = ['JAN','FEB',"MAR",'APR','MAY'];
let arr2;
(function(){
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);

//NESTED OBJECTS

const LOCAL_FORECAST = {
    today:{min:72, max: 83},
    tomorrw: {min:73.3, max:84.6}
};
function getMaxOfTomorrow(forecast){
    "use strict";
    const{tomorrw : {max: maxOfTomorrow}}  = forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTomorrow(LOCAL_FORECAST))

//SWITCH

const[z,x,,y] = [1,2,3,4,5,6,7]
console.log(z,x,y);

let a = 8, b = 6;
(()=>{
    "use strict";
    [a,b] = [b,a]})();
console.log(a);
console.log(b);

//RETURN ARRAY WITH LESS ELEMENTS
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const[,,...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);