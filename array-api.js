// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('/');        //seperator
    console.log(result);        //apple/banana/orange
}

//Q2. make an array out of a string
{
    const fruits = '🍑,🥑,🥭,🍍';
    const result = fruits.split(',', 2);
    console.log(result);    //[🍑,🥑]
}

//Q3. make this array look like this : [5,4,3,2,1]
{
    const array = [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);        //[5, 4, 3, 2, 1]
    console.log(array);         //[5, 4, 3, 2, 1]
}

//Q4. make new array without the first two elements
{
    const array = [1,2,3,4,5];
    const result = array.slice(2);      //print from index2 to the end
    console.log(result);        //[3,4,5]
    console.log(array);         //[1,2,3,4,5]
}


class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

//Q5. find a student with the score 90
{
    const result = students.find((student)=>student.score === 90);
    console.log(result);
}

//Q6. make an array of enrolled students
{
    const result = students.filter((student)=> student.enrolled);
    console.log(result);
}

//Q7. make an array containing only the students' scores
//result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student)=>student.score);
    console.log(result);
}

//Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student)=>student.score<50);
    console.log(result);        //true

    //if every students got the score lower than 50
    const result2 = students.every((student)=>student.score<50);    
    console.log(result2);       //false
}

//Q9. copute students' average score
{
    // const result = students.reduceRight((prev, curr)=> {     //from back
    const result = students.reduce((prev, curr)=> prev+curr.score, 0);     //initial value : 0, add all index in array
    console.log(result/students.length);
}

//Q10. make a string containing all the scores
//result should be : '45, 80, 90, 66, 88'
{
    const result = students.map((student)=>student.score).join();
    //const result = students.map((student)=>student.score).filter((score)=>score>=50).join();
    console.log(result);
}

//Q11. do Q10 sorted in ascending order
//result should be : '45, 66, 80, 88, 90'
{
    const result = students.map(student=>student.score)
    .sort((a,b)=> a-b)          //sort((a,b)=>b-a) = desc
    .join();
    console.log(result);
}