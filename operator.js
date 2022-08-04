//1. String concatenation
console.log('my'+'cat');        //my cat
console.log('1'+2);         //12
console.log(`string literals: 1+2 = ${1+2}`);       //1+2 = 3

//2.Numeric operators
console.log(1+1);   //2
console.log(1-1);   //0
console.log(1/1);   //1
console.log(1+1);   //1
console.log(5%2);   //1
console.log(2**3);   //8

//Incrementn and decreament operators
let counter = 2;
const preIncrement = ++counter;     //counter=counter+1; preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;    //postIncrement = counter; counter=counter+1;
console.log(`postIncrement : ${postIncrement}, counter: ${counter}`);

//4. Assignment opxerators
let x = 3;
let y = 6;
x += y  //x=x+y;
 
//5. Comparison operators
console.log(10<6);      //false

//6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4<2;         //false

//||(or) : 첫번째가 true값일시 첫번째것만 보고 뒤에 확인 안함
console.log(`or: ${value1 || value2 || check()}`);      //check()만 true반환

//&&(and) : 첫번째가 false값일시 첫번째것만 보고 뒤에 확인 안함
console.log(`and: ${value1 || value2 || check()}`);

function check(){
    for(let i =0; i<10; i++){
        console.log(`안뇽`);
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// ==loose equality, with type conversion
console.log(stringFive == numberFive);          //true
console.log(stringFive != numberFive);          //false

// ===strict equality, with type conversion
console.log(stringFive === numberFive);         //false
console.log(stringFive !== numberFive);         //true

//object equality by reference
const ex1 = {name:'java'};
const ex2 = {name:'java'};
const ex3 = ex1;
console.log(ex1==ex2);          //false
console.log(ex1===ex2);         //false
console.log(ex1===ex3);         //true

//equality - quiz
console.log(0==false);          //true
console.log(0===false);         //false
console.log(''==false);         //true
console.log(''===false);        //false
console.log(null==undefined);   //true
console.log(null===undefined);  //false

//8. Conditional operator: if
//if, else if, else
const name = 'coder';
if(name === 'janet'){
    console.log('hello, janet!');
}else if (name==='coder'){
    console.log('You are amazing coder');       //실행
}else{
    console.log('unknown');
}

//9.Ternary operator: ?
//condition ? value1 : value2;
console.log(name==='janet'?'yes':'no');

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const brower = 'IE';
switch(brower){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you');
        break;
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops
//While loop, while the condition is truthy,
//body code is executed.
let i = 3;
while(i>0){
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition
do{
    console.log(`do while : ${i}`);
    i--;
}while(i>0)

//for loop, for(begin; condition; step)
for(i=3; i>0; i--){
    console.log(`inline variable for: ${i}`);
}

//nested loops
for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

//break, continue
for(let i=0; i<11; i++){
    if(i%2==0){
        console.log(`even number(짝수): ${i}`);
    }else{
        continue;
    }
}

for(let i=0; i<11; i++){
    if(i==8){
        break;
    }else{
        console.log(`i: ${i}`);
    }
}