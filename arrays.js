//array declaration
var forArray = ["John",23];
var whileArray = ["Quincy",1];
console.log(forArray)

//double array
var doubleArray1 = [["the universe",42,43],["everything",101010],13,14];
var doubleArray2 = [["Bulls",23],["White Sox",45]];
var myData = doubleArray1[0][0];
console.log(myData)
console.log(doubleArray1)

//push function: merge 2 arrays into a 1
var pushArray = ["Stimpson","J","cat"]
pushArray.push(["happy","joy"])
console.log(pushArray)

//pop function: remove and return the last element of the array
var popArray = [["John",23],["cat",2]];
var pop = popArray.pop()
console.log(popArray);
console.log(pop)

//shift function: remove and return the first element of the array
var shiftArray = ["Stimpson","J",["cat"]];
var shift = shiftArray.shift();
console.log(shift)
console.log(shiftArray)

//unshift function: add and return the first element of the array into a another array
var unshiftArray = ["Stimpson","J",["cat"]];
unshiftArray.shift();
unshiftArray.unshift("Happy");
console.log(unshiftArray)



