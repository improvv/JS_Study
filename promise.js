'use strict';

//Promise is a JavaScript object for asynchronous operation 
//state : pending -> fulfilled or rejected  
//Producer vs Consumer

//1. Producer
//When new Promise is created, the excutor runs automatically
const promise = new Promise((resolve, reject)=>{
    //doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout(()=>{
        //resolve('improvv');               //success
        reject(new Error('no network'));    //fail
    },2000);
});

//2. Consumers : then, catch, finally
promise.then((value)=>{      //resolve('improvv'), reject(new Error('no network'));
    console.log(value);
})
.catch(error => {           //fail
    console.log(error);
})
.finally(()=>{              //whatever fail, success
    console.log('finally');
});

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(1), 1000);
});

fetchNumber
.then(num=>num*2)       //num=1
.then(num=>num*3)       //num=2
.then(num=>{            //num=6
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(num-1), 1000);
    });
})
.then(num=>console.log(num));       //num=5

//4. Error Handling
const getHen = ()=>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('🐓'), 1000);
    });
const getEgg = hen=>
    new Promise((resolve, reject)=>{
        // setTimeout(()=>resolve(`${hen}=>🥚`), 1000);
        setTimeout(()=>reject(new Error(`${hen}=>🥚`), 1000));
    });
const cook = egg=>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(`${egg}=>🍳`), 1000);
    });

getHen()
.then(getEgg)           // =then(hen => getEgg(hen))
.catch(error=>{
    return '🥐';           //🥐=>🍳
})
.then(cook)             //=then(egg=>cook(egg))
.then(console.log)     //=then(meal=>console.log(meal))
.catch(console.log);
