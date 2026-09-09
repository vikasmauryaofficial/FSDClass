class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }

    display(){
        console.log(this.name);
        console.log(this.age);
    }

}     
let s1=new Student("vikas",28);

s1.display();