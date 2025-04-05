export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    sal: number;

    constructor(id: string, firstName: string, lastName: string,
         email: string, gender: string,sal: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.sal = sal;
    }
    getFullName(): string {
        return `${this.gender === 'male' ? 'Mr.':'Miss'} ${this.firstName} ${this.lastName}`;
    }
    getYearlySalary(): number {
        return 12 * this.sal;
    }
}
