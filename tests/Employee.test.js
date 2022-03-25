const Employee = require('../lib/Employee');
test('To create an Employee class', () => {
  const employee = new Employee('neo', 123, 'neo@gmail.com');
  expect(employee.name).toBe('neo');
  expect(employee.getName()).toBe('neo');
  expect(employee.id).toBe(123);
  expect(employee.getId()).toBe(123);
  expect(employee.email).toBe('neo@gmail.com');
  expect(employee.getEmail()).toBe('neo@gmail.com');
  expect(employee.getRole()).toEqual("Employee");
});
