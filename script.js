//complete this code
class Person {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	// Getter for name
	get name() {
		return this._name;
	}

	// Getter for age (needed for output)
	get age() {
		return this._age;
	}

	// Setter for age
	set age(newAge) {
		this._age = newAge;
	}
}
window.Person = Person;

class Student extends Person {
	study() {
		console.log(`${this.name} is studying`);
	}
}
window.Student = Student;

class Teacher extends Person {
	teach() {
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Teacher = Teacher;
const person = new Person("John", 25);
console.log(person.name);
person.age = 30;  
console.log(person.age);