//Objects
//One of the JavaScript's data types
//a collection of related data and/or funtionality
//Nearly all objects in JavaScript are instances of Object
//object = {key : value};

//1. literals and properties
const obj1 = {};                //'Object literal' syntax
const obj2 = new Object();      //'Object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const improvv = {name: 'improvv', age: 4};
print(improvv);

//with JavaScript magic (dynamically typed language)
//can add properties later
improvv.hasJob = true;
console.log(improvv.hasJob);        //true

//can delete properties later
delete improvv.hasJob;
console.log(improvv.hasJob);        //undefine

//2. Computed properties
//key should be always string
console.log(improvv.name);
console.log(improvv['name']);
improvv['hasJob'] = true;
console.log(improvv.hasJob);

function printValue(obj, key){
    console.log(obj['key']);
}
printValue(improvv, 'name');
printValue(improvv, 'age');

//3. Property value shorthand
const person1 = {name:'bob', age:2};
const person2 = {name:'steve', age:3};
const person3 = {name:'dave', age:4};
const person4 = new Person('improvv', 5);
console.log(person4);

//4. Constuctor function
function Person(name, age){
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

//5. in operator: property existence check(key in obj)
console.log('name' in improvv);     //true
console.log('age' in improvv);      //true
console.log('random' in improvv);   //false
console.log(improvv.random);        //undefined

//6. for..in vs for..of
//for(key in obj)
console.clear();

for(key in improvv){        // print all keys in 'improvv'
    console.log(key);       //name, age, hasJob
}

//for (value of iterable)
const array = [1, 2, 4, 5];

for(let i =0; i<array.length; i++){
    console.log(array[i]);             //1, 2, 4, 5
}

for(value of array){        //better!
    console.log(value);             //1, 2, 4, 5
}

//7. Cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = {name:'improvv', age:'20'};
const user2 = user;
console.log(user);
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

//Assign
// const user4 = {};
// Object.assign(user4, user);      -> same way with below
const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size:'big'};
const mixed = Object.assign({}, fruit1, fruit2);        //cover
console.log(mixed.color);           //blue
console.log(mixed.size);            //big

