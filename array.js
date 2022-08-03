'use strict';

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. Index position
const fruits = ['🍍', '🍒'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);     //🍍
console.log(fruits[1]);     //🍒
console.log(fruits[2]);     //undefined
console.log(fruits[fruits.length-1]);    //🍒

//3. Looping over and array
//print all fruits
console.clear();

//for loop
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//for of
for(let fruit of fruits){
    console.log(fruit);
}

//forEach
fruits.forEach((fruit) => console.log(fruit));    //Arrow Function(Anonymous)

//4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('🍎','🍉');
console.log(fruits);

//pop : remove an item from the end
fruits.pop('🍉');
console.log(fruits);

//unshift : add an item to the beginning
fruits.unshift('🍑','🍈');
console.log(fruits);

//shift : remove an item to the beginning
fruits.shift();
console.log(fruits);

//note! shift, unshift are much slower than pop, push

//splice : remove and item by index position
fruits.push('🍑','🍅','🥭');
console.log(fruits);
fruits.splice(1,2);     //remove 2 from index1(if it's undefined, remove all from index1)
console.log(fruits);
fruits.splice(1, 2, '🍍', '🥥');    //remove index1 and add 🍍,🥥
console.log(fruits);

//combine two arrays
const fruits2 = ['🌶','🥑'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//find the index
console.clear();
console.log(fruits);

//indexOf : find the indes
console.log(fruits.indexOf('🥭'));      //4
console.log(fruits.indexOf('🍑'));      //-1 (cannot find)

//inclues
console.log(fruits.includes('🥭'));     //ture
console.log(fruits.includes('🍑'));     //false

// lastIndexOf
console.clear();
fruits.push('🍈');
console.log(fruits);
console.log(fruits.indexOf('🍈'));      //print first one, 0
console.log(fruits.lastIndexOf('🍈'));  //5

