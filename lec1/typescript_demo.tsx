//******** Typing ********//
let str: string = 'Hello, trends';
let num: number = 42;
let truth: boolean = false;
const someFunc = (x: number, s: string, b: boolean): number => {
  // do some operations...
  return x;
};

// Any: can be anything!
// let notSure: any = 4;
// notSure = 'maybe a string instead';
// notSure = false; // now its a boolean

// let anyList: any[] = [4, 'le string', false];
// let hodgePodgeList: (number | string | boolean)[] = [4, 'le string', false];

// unknown is a type-safe any
let notSure: unknown = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

if (typeof notSure === 'string') {
  // TypeScript knows notSure is a string
  notSure.toUpperCase();
}

// Optional parameter
const introduce = (name: string, github?: string): string => {
    return github
      ? `Hi, I'm ${name}. Checkout my GitHub @${github}`
      : `Hi, I'm ${name}. I don't have a GitHub.`;
  };

// Default parameter
const introduce2 = (name: string, github: string = 'no-github'): string => {
    return github
        ? `Hi, I'm ${name}. Checkout my GitHub @${github}`
        : `Hi, I'm ${name}. I don't have a GitHub.`;
};

// String literal type
type TrafficLightColors = 'red' | 'green' | 'yellow';
let light1: TrafficLightColors = 'red';
// light1 = 'blue'; // TypeError

// Numeric literal type
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
const rollDice = (): DiceRoll => {
  // ...
//   return 7; // TypeError
};

// Union type
const union: number | string = 5; // number
const union2: number | string = 'hello'; // string

type TrafficLightColors = 'red' | 'green' | 'yellow';
type PrimaryColors = 'red' | 'green' | 'blue';

// "red" | "green" | "yellow" | "blue"
type union = PrimaryColors | TrafficLightColors;

// Intersection Type
type TrafficLightColors = 'red' | 'green' | 'yellow';
type PrimaryColors = 'red' | 'green' | 'blue';
type intersect = PrimaryColors & TrafficLightColors; // "red" | "green"

// Enum
enum TrafficLightColors {
    Red = 'red',
    Green = 'green',
    Yellow = 'yellow',
  }
let light1: TrafficLightColors = TrafficLightColors.Red;
light1 = TrafficLightColors.Blue; // TypeError

// Object
type Person = {
    name: string;
    age: number;
    isAlive: boolean;
};

type PersonIntroduction = {
    introduction: string;
    isAlive: boolean;
};

const introduce = (person: Person): PersonIntroduction => {
    return {
        introduction: `Hi, I'm ${person.name}. I'm ${person.age} years old.`,
        isAlive: person.isAlive,
    };
};

// Type assertion
const myString = 'hello';
const myStringLen = (myString as string).length;
const myStringLen = myString!.length; // assert not null