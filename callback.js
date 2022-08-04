'use strict';

//JavaScript is synchronous
//Execute the code block in order after hoisting
//hoisting : var, functino declaration
console.log('1');
console.log('2');
console.log('3');       //1,2,3

//Synchronous callback
function printImmediately(print){
    print();
}

//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

console.log('1');
setTimeout(()=>{
    console.log('2');
}, 1000)                //1000ms=1s, call back in 1second
console.log('3');       //1,3,2

printImmediately(()=>console.log('hello'));     //1,3,hello,2

printWithDelay(()=>console.log('async callback'), 2000);    //1,3,hello,2,async callback

//Callback Hell example (BAD)
//Hard to read, analyze problem, debug
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id==='improvv'&&password==='dream') ||
                (id==='coder'&&password==='coding')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user==='improvv'){
                onSuccess({name:'improvv', role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter your password');
userStorage.loginUser(
    id, 
    password, 
    (user)=>{
        userStorage.getRoles(user, (userWithRole)=>{
            alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
        },
        (error)=>{console.log(error);} 
        );
    }, 
    (error)=>{console.log(error);}
    )