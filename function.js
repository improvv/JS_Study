//Function
//fundamental building block in the program
//subprogram can be used multiple times
//performs a task or calculates a value

//1. Function declaration
//funtion name(param1, param2){body ... return;}
//one function === one thing
//naming : doSomething, command, verb
//function is object in JS
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello!!');
log(1234);

//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const improvv = {name: 'improvv'};
changeName(improvv);
console.log(improvv);       //{name: "coder"}

//3. Default parameters (added in ES6)
function showMsg(msg, from='unknown'){      //from's default = 'unknown'
    console.log(`${msg} by ${from}`);
}
showMsg('Hi!');

//4. Rest parameters
function printAll(...args){     //Array
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('hello','improvv','!!!!!');

//5. Local scope
let globalMsg = 'global';       //global variable
function printMsg(){
    let msg = 'hello';
    console.log(msg);    //local variable
    console.log(globalMsg);
    function pringAnother(){
        console.log(msg);
    }
    let childMsg = 'hello';
}
printMsg();

//6. Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2);    //3
console.log(`sum: ${sum(1,2)}`);

//7. Early return, early exit
//bad
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if(user.point <= 10){
        return;            //early return
    }
    //long upgrade logic...
}

// Function expression
const print = function(){       //Anonymous function = no name
    console.log('print');
};
print();
const printAgain = print;
printAgain();

// Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
const printYes = function(){        //Anonymous function
    console.log('yes');
}
const printNo = function print(){       //Named function
    console.log('no');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//Always anonymous
const simplePrint = function(){
    console.log('simplePrint!');
}

const simplePrint2 = () => console.log('simplePrint!');     //same as 'simplePrint'
const add = (a,b) => a+b;
const simpleMulti = (a,b) => {
    //when you do s/th more
    return a*b;
}

//IIFE: Immediately invoked Function Expression
(function hello(){
    console.log('IIFE');
})();