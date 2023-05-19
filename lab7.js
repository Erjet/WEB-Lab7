class Employee {
    constructor(name, surname, base_salary, practice) {
      this.name = name;
      this.surname = surname;
      this.base_salary = base_salary;
      this.practice = practice;
    }

    payment() {
        let salary = 0
        if (this.practice <= 2){
            salary = this.base_salary
        } else if (this.practice <= 5) {
            salary = (this.base_salary+200)
        } else {
            salary = (this.base_salary* 1.2 + 500)
        }
        console.log(`${this.name} ${this.surname}  отримав ${salary} шекєлей!`);
    }
}

class Designer extends Employee{
    constructor(name, surname, base_salary, practice, effCoeff) {
        super(name, surname, base_salary, practice)
        this.effCoeff = effCoeff
    }

    payment() {
        let salary = 0
        if (this.practice <= 2){
            salary = this.base_salary
        } else if (this.practice <= 5) {
            salary = (this.base_salary+200)
        } else {
            salary = (this.base_salary* 1.2 + 500)
        }

        salary = salary * this.effCoeff
        console.log(`${this.name} ${this.surname}  отримав ${salary} шекєлей!`);
    }
}

class Developer extends Employee{
    constructor(name, surname, base_salary, practice, effCoeff) {
        super(name, surname, base_salary, practice)
    }
}

class Manager extends Employee{
    constructor(name, surname, base_salary, practice, team) {
        super(name, surname, base_salary, practice)
        this.team = team
    }
    payment() 
    {    
        let salary = 0
        if (this.practice <= 2){
            salary = this.base_salary
        } else if (this.practice <= 5) {
            salary = (this.base_salary+200)
        } else {
            salary = (this.base_salary* 1.2 + 500)
        }

        if (this.team.length >= 5){
            salary += 200
        } else if (this.team.length >= 10) {
            salary += 300
        }

        let devNumber = 0

        this.team.forEach(employee => {if (employee.constructor.name == "Developer") {devNumber += 1}})
				
        console.log(devNumber);
        
        if (devNumber > (this.team.length/2)) {salary *= 1.1}

        console.log(`${this.name} ${this.surname}  отримав ${salary} шекєлей!`);
    }
        giveSalary()
    {
        this.team.forEach(employee => employee.payment())
        this.payment()
    }
}

class Department {
    constructor(managerList) {
        this.managerList = managerList 
    }

    giveSalary() {
    		
        this.managerList.forEach(manager => manager.giveSalary())
    }
}
const employee1 = new Developer('Иван', 'Иванов', 1000, 2);
const employee2 = new Developer('Иван', 'Иванов', 1000, 2);
const employee3 = new Developer('Иван', 'Иванов', 1000, 2);
const employee4 = new Employee('Иван', 'Иванов', 1000, 2);
const employee5 = new Employee('Иван', 'Иванов', 1000, 2);


const employee = new Manager('Иван', 'Иванов', 1000, 2,[employee1, employee2, employee3, employee4, employee5]);

const department = new Department([employee]);
department.giveSalary();