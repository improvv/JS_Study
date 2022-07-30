'use strict';
//Object-oriendted programming
//class : template
//object : instance of a class

//1. Class declarations
class Person{
    //Constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const improvv = new Person('improvv', 20);
console.log(improvv.name);
console.log(improvv.age);
improvv.speak();    

//2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    get age(){
        return this._age;
    }

    set age(value){
        // if(value < 0){
        //     throw Error('age cannot be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);         //0

const user2 = new User('Janet', 'Seo', 25);
console.log(user2.age);         //25

//3. fields(public, private)
class Experiment{
    publicField = 2;
    #privateField = 0;      //Onlh can be read, changed in this class
}
const experiment = new Experiment();
console.log(experiment.publicField);        //2
console.log(experiment.privateField);       //undefined

//4. Static properties and methods
class Article{
    static publisher = 'Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//5. Inheritance
// a way for one class to extend another class
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{       //Overriding
    draw(){
        super.draw();
        console.log('📐');
    }
    getArea(){
        return (this.width*this.height)/2;
    }
    toString(){
        return `Triangle: color : ${this.color}`
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(10, 10, 'red');
triangle.draw();
console.log(triangle.getArea());

//6. Class checkiong: instanceOf (true, false)
console.log(rectangle instanceof Rectangle);    //t
console.log(triangle instanceof Rectangle);     //f
console.log(triangle instanceof Triangle);      //t
console.log(triangle instanceof Shape);         //t
console.log(triangle instanceof Object);        //t
console.log(triangle.toString());
