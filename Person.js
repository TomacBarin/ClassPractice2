export class Person {
    constructor(firstName, lastName, age, isActive, hobbies, meta) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isActive = isActive;
        this.hobbies = hobbies;
        this.meta = meta;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getInfo() {
        // Roll:   
        const role = this.meta.role || "okänd roll"

        //Om personen är aktiv:
        const activeStatus = this.isActive ? "aktiv" : "inaktiv"
        
        return `${this.getFullName()} är ${this.age} år gammal, är en ${role} och är ${activeStatus}.`
    }

    toggleActive() {
        this.isActive = !this.isActive
    }
}