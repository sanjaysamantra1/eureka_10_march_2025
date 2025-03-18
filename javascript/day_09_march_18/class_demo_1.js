class Student {
    id;
    firstName;
    lastName;
    phone;
    location;
    course;

    constructor(id, firstName, lastName, phone, location, course) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.location = location;
        this.course = course;
    }
    fullName() {
        console.log(`FullName for id:${this.id} is ${this.firstName} ${this.lastName}`);
    }
}
let std1 = new Student(1, 'pavan', 'bellamkonda', 1234512345, 'va', 'angular');
let std2 = new Student(2, 'jaydeep', 'tumepalli', 1122334455, 'pa', 'java');
console.log(std1);
console.log(std2);

std1.fullName();