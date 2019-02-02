// Implicit type definition
let myText = "Some Text";

// Error
// myText = 12;

// numbers (integer and float)
let myNumber = 23;

// boolean
let isActive = false;

// Error
// isActive = 1;

/** Explicit */

let myA;
// This is ok.
myA = 23;
myA = '23';
myA = true;

// any is default
let myB: any;

let myC: number;
myC = 11;
// Error
// myC = '11';
