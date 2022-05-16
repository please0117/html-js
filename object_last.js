class Person{
    constructor(first, last, age, gender, interests){
        this.name = {
            first, last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting(){
        console.log(`Hi! l'm ${this.name.first}`);
    };
    
    farewell(){
        console.log(`${this.name.first} has left the building. Bye for now!`);
    };
}

let han = new Person('Han', 'gul', 500, 'male', ['writing', 'speaking']);
han.greeting();

let lela = new Person('lela', 'Organa', 19, 'female', ['Government']);
lela.farewell();

class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade){
        super(first, last, age, gender, interests);
        // this.name = {
        //     first, last
        // };
        // this.age = age;
        // this.gender = gender;
        // this.interests = interests;
        this.subject = subject;
        this.grade = grade;
    }
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting();
snape.farewell();
console.log(snape.age);
console.log(snape.subject);