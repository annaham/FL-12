const _age = Symbol('age');
const _fullName = Symbol('fullname');
const _EMPLOYEES = Symbol('EMPLOYEES');
const _managedEmployees = Symbol('managedEmployees');

class Employee{
  static[_EMPLOYEES] = [];
  constructor(id, firstName, lastName, birthday, salary, position, department){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.salary = salary;
    this.position = position;
    this.department = department;
    this[_age] = parseInt(String(Date.now() - new Date(this.birthday).getTime()/(1000*60*60*24*365)), 10);
    this[_fullName] = `${this.firstName}  ${this.lastName}`;
    

    this[_EMPLOYEES].push(this);
  }

  get age(){
      return this[_age];
  }

  set age(age){
      this[_age] = age;
  }

  get fullName(){
      return this[_fullName];
  }

  set fullName(fullName){
      this[_fullName] = fullName;
  }


  quit(){
      this.EMPLOYEES.splice(Employee.EMPLOYEES.indexOf(this), 1);
  }

  retire(){
      console.log('It was such a pleasure to work with you!');
      quit();
  }

  getFired(){
      console.log('Not a big deal!');
      quit();
  }

  changeDepartment(newDepartment){
      this.department = newDepartment;
  }

  changePosition(newPosition){
      this.position = newPosition;
  }

  changeSalary(newSalary){
      this.salary = newSalary;
  }

  getPromoted(perks, text) {
    const { department, position, salary } = perks;

    if (benefits) {
      if (department) {
        this.changeDepartment(department);
      } else if (position) {
        this.changePosition(position);
      } else if (salary) {
        this.changeSalary(salary);
      }
    }
    console.log(text);
  }

  
  getDemoted(perks) {
    const { department, position, salary } = perks;

    if (benefits) {
      if (department) {
        this.changeDepartment(department);
      } else if (position) {
        this.changePosition(position);
      } else if (salary) {
        this.changeSalary(salary);
      }
    }
    console.log("Damn!");
  }
}

class Manager extends Employee {
  constructor(id, firstName, lastName, birthday, salary, department, _EMPLOYEES) {
    super(id, firstName, lastName, birthday, salary, department, _EMPLOYEES );
    this.position = 'manager';
    this._managedEmployees = [];

    for (let em of _EMPLOYEES) {
      if (em.position != 'manager' && em.department == this.department) {
        managedEmployees.push(managedEmployees);
      }
    }
  }

  ManagerPro() {
    this.managedEmployees.getPromoted(benefits, 'Yoohooo!');
  }
}

class BlueCollarWorker extends Employee {
  constructor(id, firstName, lastName, birthday, salary, position, department) {
    super(id, firstName, lastName, birthday, salary, position, department)
  }
}

class HRManager extends Manager {
  constructor(id, firstName, lastName, birthday, salary) {
    super(id, firstName, lastName, birthday, salary);
    this.department = 'hr';
  }
}

class SalesManager extends Manager {
  constructor(id, firstName, lastName, birthday, salary) {
    super(id, firstName, lastName, birthday, salary);
    this.department = 'sales';
  }
}


