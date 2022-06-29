const btn1 = document.querySelector('.greeting');
const btn2 = document.querySelector('.bio');
const btn3 = document.querySelector('.farewell');

function Person(first, last, age, gender, interests){
    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function(){
        var age = ""; var string ="";
        if(this.age === "male" || this.age === "Male" || this.age === "m" || this.age === "M"){
            age = "He";
        } else if(this.age === "female" || this.age === "Female" || this.age === "f" || this.age === "F"){
            age = "She";
        } else{
            age = "They";   
        }
        for(var i = 0; i < this.interests.length; i++){
            if(i === this.interests.length - 1){
                string += this.interests[i];
            }
            else{
                string += (this.interests[i] + " and ");
            }
        }
        alert(this.name.first + " " + this.name.last + " is " + this.age + " years old. " + age +  " likes "
        + string + ".");
    }
}

var person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing", "dancing", "reading"]);

btn1.onclick = function(){
    alert("Hi, I'm " + person1.name.first + " " + person1.name.last + "!");
}

btn2.onclick = function(){
    person1.bio();
}

btn3.onclick =  function(){
    alert(person1.name.first + " has left the building. Bye for now!");
}