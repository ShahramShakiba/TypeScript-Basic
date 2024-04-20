// Function types, parameters

// Primitives: number, string, boolean
let age: number;
age = 35;

let userName: string = 'Shahram';

let isTypescript: boolean;
isTypescript = true;

// More complex types: arrays, objects
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

// array of objects
let people: {
  name: string;
  age: number;
}[];

// Type inference(sct of deriving)
let course = 'React - The Complete Guide';
course = 1234; 

// by default typescript tries to infer(derive) as many types as possible - which types are used where, without you explicitly stating those types | if you initialize this variable with a type, Typescript will look at the value type and then use that value type as an inferred type for this variable, SO if you then try to assign a different type thereafter, you'll get an ERROR !!!!
