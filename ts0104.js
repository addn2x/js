function returnMyText() {
    return "myText";
}
console.log(returnMyText());
function hello() {
    console.log("Hi there!");
}
hello();
// 
function add(a, b) {
    return a + b;
}
console.log(add(3, 4));
var myAdd;
myAdd = add;
console.log(myAdd(2, 4));
