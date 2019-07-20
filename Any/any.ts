let myValue: any = "Hello Typescript";
console.log(myValue);

myValue = 10;
console.log(myValue);

// type infernace
let myNumValue: number = <number>myValue;
console.log(myValue);
