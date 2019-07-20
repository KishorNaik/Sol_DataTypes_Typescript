let numValue: number;
numValue = 20;

console.log(numValue);

// toPrecision
numValue = 35.77;
console.log(numValue.toPrecision(2));

// toString
let strValue: string = numValue.toString();
console.log(strValue);

// valueof

let numValueObj = new Number(20);
console.log(numValueObj.valueOf());
