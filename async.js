// async & await
//clear style of using promise

//1. async

// function fetchUser(){
//     return new Promise((resolve, reject)=>{
//         //do network request in 10 secs..
//         resolve('improvv');
//     });
// }

async function fetchUser(){
    //do network request in 10 secs..
    return 'improvv';
} 

const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));     //after 'ms' call 'resolve'
}

async function getApple(){
    await delay(2000);         
    return '🍎';                //after 1000ms, return '🍎' 
}

async function getMango(){
    await delay(1000);
    return '🥭';               //after 1000ms, return '🥭' 
}

// function getMango(){
//     return delay(3000)
//     .then(()=>'🥭');
// }

//callBack Hell 
// function pickFruits(){
//     return getApple()
//     .then(apple=>{
//         return getMango()
//         .then(mango => `${apple}+${mango}`);        //🍎+🥭
//     });
// }

//Use this way
async function pickFruits(){
    const applePromise = getApple();
    const mangoPromise = getMango();    //take 1sec(not 2sec)
    const apple = await applePromise;
    const mango = await mangoPromise;   
    return `${apple}+${mango}`;        //🍎+🥭
}

pickFruits().then(console.log);

//3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getMango()])
    .then(fruits=>fruits.join('+'));
}
pickAllFruits().then(console.log);        //🍎+🥭

function pickOnlyOne(){
    return Promise.race([getApple(), getMango()]);
}
pickOnlyOne().then(console.log);            //🥭