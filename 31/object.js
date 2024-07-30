var student1={
    name:"Ahmadul Hasan",
    age:"24"
}
console.log(student1);

function Student(name, age, cg){
    this.name=name;
    this.age=age;
    this.cg=cg;
    this.display=function(){
        console.log(this.name);
        console.log(this.name);
    }
}

var s1=new Student("gal", 23, 4.00);
console.log(s1);
var s2=new Student("Samia", 23, 3.90);
s2.display();
