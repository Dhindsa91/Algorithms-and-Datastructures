class Person {
    name;
    age;
    gender;

    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat(){

    }

    sleep(){
        return !isSleeping;
    }

    code(){

    }
}

const Arvind = new Person("Arvind", 30, "Male"); // init
Arvind.eat();
Arvind.sleep();
Arvind.code();