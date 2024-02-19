//******** Declaring Variable ********//
let mutable_var = "Hello";
const immutable_var = "World";

console.log(mutable_var);
console.log(immutable_var);

mutable_var = "Hello 2";
// immutable_var = "World 2"; // This will envoke error

console.log(mutable_var);
console.log(immutable_var);

//******** Object Accessors ********//
const trends = {
    code: "INFO1998",
    location: "Hollister 110",
    instructors: ["Sarah", "Sophia"],
    schedule: {
        day: "Monday",
        start_time: "7:30PM",
        end_time: "8:45PM"
    }
};

console.log(trends);
console.log(trends.code);
console.log(trends["code"]);

//******** Object Accessors ********//
function sumArray1(arr) {
    let sum = 0;
    for (const elt of arr) sum += elt;
    return sum;
}

const sumArray2 = (arr) => {
    let sum = 0;
    for (const elt of arr) sum += elt;
    return sum;
}

console.log(sumArray1);
console.log(sumArray2);
console.log(sumArray1([10, 20, 30]));
console.log(sumArray2([10, 20, 30]));

const calcRectArea = (w, h) => w * h;

//******** Spreading and Destructing ********//
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]

const obj = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj, b: 4, d: 5 }; // { a: 1, b: 4, c: 3, d: 5 }

const arr3 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr3; // first = 1, second = 2, rest = [3, 4, 5]

console.log(first); // 1
console.log(rest[1]); // 4

const { a, b, c } = obj; // a = 1, b = 2, c = 3

//******** String Interpolation ********//
const name = 'Sophia';
const age = 20;
const greeting = `Hello, my name is ${name} and I am ${age + 1} years old.`;

console.log(greeting);