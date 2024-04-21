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