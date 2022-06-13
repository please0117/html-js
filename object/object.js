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
Person.prototype.farewell = function(){
    alert(this.name.first + " has left the building. Bye for now!");
}
Person.prototype.greeting = function(){
    alert("Hi, I'm " + this.name.first + " " + this.name.last + ".");
}

var person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing", "dancing", "reading"]);

const btn = document.querySelector('button');
btn.onclick = person1.farewell();