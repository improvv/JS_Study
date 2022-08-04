// AJAX(Asynchronous JavaScript And XML) : 웹페이지에서 동적으로 서버에게 데이터를 주고 받을 수 있는 기술
// XPathResult(XMLHttpRequest) : Object, 간단하게 서버에게 데이터를 요청하고 받을 수 있음

// JSON(JavaScript Object Notation)
//simplest data interchange format
//lightweight text-based structure
//easy to read
//key-value pairs
//used for serialization and transmission of data between the network the network connection
//independent programming language and platform

//1. Object to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);           //true

json = JSON.stringify(['apple','banana']);
console.log(json);          //["apple","banana"]

const rabbit = {
    name : 'tori',
    color : 'white',
    size: null,
    birthDate : new Date(),
    //symbol : Symbol('id'),       //doesn't include
    jump : () => {console.log(`${name} can jump!`);},   //doesn't include
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name"]);        //{"name":"tori"}, only name
console.log(json);

json = JSON.stringify(rabbit, (key, value)=> {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'name'?'improvv':value;
});
console.log(json);

//2. JSON to Obejct
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value)=>{
    console.log(`key : ${key}, value : ${value}`);
    return key ==='birthDate'?new Date(value) : value;
});
console.log(obj);
rabbit.jump();      //can jump!
//obj.jump();         //error!

console.log(rabbit.birthDate.getDate());        //4
console.log(obj.birthDate.getDate());           //4

