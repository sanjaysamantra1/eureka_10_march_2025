class Student {
    constructor(roll, name, address, course) {
        this.roll = roll;
        this.name = name;
        this.address = address;
        this.course = course;
        // this.clgName = 'Eureka';
    }
}
Student.prototype.clgName = 'Eureka';

let std1 = new Student(1, 'Neel', 'va', 'angular');
let std2 = new Student(2, 'Shone', 'pa', 'java');
console.log(std1);
console.log(std2); 
console.log(std1.name, std1.clgName)