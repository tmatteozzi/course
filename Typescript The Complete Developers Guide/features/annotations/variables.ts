let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// BUILT IN OBJECTS
let date: Date = new Date();

// ARRAY
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3]

// CLASSES
class Car {}

let car: Car = new Car();

// OBJECT LITERAL
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// FUNCTION
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// WHEN TO USE ANNOTATIONS
// 1) Function returns 'any' type
const json = '{ "x": 10, "y": 20 }';
const coordinates: { x: number; y: number } = JSON.parse(json);
// 2) Declare a variable and initialize it later
let words = ['red', 'blue', 'green'];
let foundWord: boolean;
for(let i = 0; i < words.length; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
};
// 3) TYPE CANNOT BE INFERRED CORRECTLY
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
};
