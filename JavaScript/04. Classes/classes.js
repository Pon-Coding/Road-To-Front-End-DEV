class Student{
    constructor(id,name,yearBorn){
        this.id = id;
        this.name = name;
        this.yearBorn = yearBorn;
    }
    myAge=()=>{
        var date = new Date();
        return date.getFullYear() - this.yearBorn;
    }
    myAgeDay=()=>{
        var date = new Date();
        return 365*(date.getFullYear() - this.yearBorn);
    }
}

 class School extends Student{
    constructor(id,name,yearBorn,totalStudent){
        super(id,name,yearBorn);
        this.totalStudent = totalStudent;
    }
    getStuNumber=()=>{
        return this.id + "\t" + this.name + "\t" + this.yearBorn + '\t' + "AGE : "+this.myAge() + "\t" +"N. "+this.totalStudent;
    }
}

obj = new Student(1,"ROPON",2002);
stu1 = new School(1,"PON",2003,100);

console.log(stu1.getStuNumber());
