const Intern = require('../lib/Intern');
test('To create an Intern object', () => {
  const intern = new Intern('neo', 123, 'neo@gmail.com', 'USC');
  expect(intern.name).toBe('neo');
  expect(intern.getName()).toBe('neo');
  expect(intern.id).toBe(123);
  expect(intern.getId()).toBe(123);
  expect(intern.email).toBe('neo@gmail.com');
  expect(intern.getEmail()).toBe('neo@gmail.com');
  expect(intern.school).toBe('USC');
  expect(intern.getSchool()).toBe('USC');
  expect(intern.getRole()).toEqual('Intern');
});
