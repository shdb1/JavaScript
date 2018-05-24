var Employee = {
  company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);

/*
The output would be xyz. Here, emp1 object has company as its prototype property. The delete operator doesn't delete prototype property.

emp1 object doesn't have company as its own property. You can test it console.log(emp1.hasOwnProperty('company')); 
//output : false. However, we can delete the company property directly from theEmployee object using delete Employee.company.
 Or, we can also delete the emp1 object using the __proto__ property delete emp1.__proto__.company.

*/