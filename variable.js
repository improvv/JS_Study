//1. Use strict
//Use this for Vanila Javascript
//added ECMAScript 5
'use strict';

//2.Variable, rw(read/write)
//let(added in ES6)
//Don't use var
//const: favor immutable data type always for a few reasons(read only):
//security, thread safety, reduce human mistake

//Immutable data types : primitive types, frozen objects : 변경 불가능
//Mutable data types : all objects by default are mutable in JS : 변경 가능(array

//3. Variable types
//primitive, single item : number, string, boolean, null, undefined, symbol : primitive는 value가 바로 저장
//object, box container : obj는 메모리가 커서 reference를 통해 저장
//function, first-class function
const count = 17;    
console.log(`value: ${count}, type: ${typeof count}`);

//number : special numeric values: infinity, -infinity, NaN(Not a Number)
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string

//boolean
//false:0, null(empty), undefined(declare only), NaN, ''
//true: any other values

//symbol, create unique identifiers for obj
const sy1 = Symbol('id');
const sy2 = Symbol('id');
console.log(sy1===sy2);

//object, real-life, data structure
const janet = { name:'janet', age:21};
janet.age=20;

//4. Dynamic typing: dinamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = '7'+1;           //저절로 string을 int로 바꿔서 8출력
console.log(`value: ${text}, type: ${typeof text}`);     
text = '8'/'2';         //저절로 string을 int로 바꿔서 4출력
console.log(`value: ${text}, type: ${typeof text}`);

