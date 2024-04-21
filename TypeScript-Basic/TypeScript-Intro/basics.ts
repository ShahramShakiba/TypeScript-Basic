// 01. Primitives: number, string, boolean
let age: number;
age = 35;

let userName: string = 'Shahram';

let isTypescript: boolean;
isTypescript = true;

// 02. More complex types: arrays, objects
let hobbies: string[]; //array of strings
hobbies = ['Sports', 'Cooking'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Max',
  age: 35,
};

// 03. array of objects
let people: {
  name: string;
  age: number;
}[];

// 04. Type inference(act of deriving)
let course = 'React - The Complete Guide';
course = 1234;

// by default typescript tries to infer(derive) as many types as possible - which types are used where, without you explicitly stating those types | if you initialize this variable with a type, Typescript will look at the value type and then use that value type as an inferred type for this variable, SO if you then try to assign a different type thereafter, you'll get an ERROR !!!!

// 05. Union Types: is a type definition that allows more than one type | more flexible values and types
let myCourse: string | number = 'React - The Complete Guide';
myCourse = 1234;

// 06. Type Aliases: define once, then repeat it in all the places where I need it
type Person = {
  name: string;
  age: number;
};

let person2: Person;
person2 = {
  name: 'Shahram',
  age: 35,
};

let people2: Person[]; //array full of objs

// 07. Functions & Types
function add2(a: number, b: number) {
  return a + b;
} // return-type: functions can infers the return-type | functions when we work with types, don't just use types for the parameters, but also for the "return-value"

// we can explicitly set the type for the return, you shouldn't do that if you haven't a reason to do that
function add3(a: number, b: number): number | string {
  return a + b;
}

function add4(value: any) {
  console.log(value);
}
// this fn doesn't return anything, it has no return statement | it has a special return-type called "void" = is basically comparable with null and undefined but it's only used in conjunction with fns | it means this fn never returns

// 08. generics | we can use generics to create reusable components that work with any type, not just a specific one

// define a generic-type after fn-name <T> t for the type, which will be available inside of this function
function generic<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const dummyArray = [1, 2, 3];

// with generic-type, typescript is able to understand it should look at the concrete values of the arguments here and it understand that this is an array of numbers or strings, | therefore it's able to infer the type of the array
const numberArray = generic(dummyArray, -1); // [-1, 1, 2, 3]
const stringArray = generic(['a', 'b', 'c'], 'd');

numberArray[0].split(''); // we get an error
stringArray[0].split(''); 
