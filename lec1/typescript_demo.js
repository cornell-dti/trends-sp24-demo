//******** Typing ********//
var str = 'Hello, trends';
var num = 42;
var truth = false;
var someFunc = function (x, s, b) {
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
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean
if (typeof notSure === 'string') {
    // TypeScript knows notSure is a string
    console.log(notSure);
    notSure.toUpperCase();
}
console.log(notSure);
