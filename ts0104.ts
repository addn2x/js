

function returnMyText(): string {
    return "myText";
}

console.log(returnMyText());

function hello(): void {
    console.log("Hi there!");
}

hello();

// 

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(3, 4));

let myAdd: (val1: number, val2: number) => number;
myAdd = add;
console.log(myAdd(2, 4));