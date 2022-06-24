function checkSum(num){
    return num > 0 ? "positive": num < 0 ? "negative": "zero";
}
console.log(checkSum(-10));
console.log(checkSum(21));
console.log(checkSum(0));