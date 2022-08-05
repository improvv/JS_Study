class UserStorage{
    loginUser(id, password){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(
                    (id==='improvv'&&password==='dream') ||
                    (id==='coder'&&password==='coding')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(user==='improvv'){
                    resolve({name:'improvv', role:'admin'});
                }else{
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter your password');
userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user=>alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);
