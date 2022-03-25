const Manager = require('../lib/Manager');
test('To create a Manager object', () => {
  const manager = new Manager('neo', 123, 'neo@gmail.com', '3852152913');
  expect(manager.name).toBe('neo');
  expect(manager.getName()).toBe('neo');
  expect(manager.id).toBe(123);
  expect(manager.getId()).toBe(123);
  expect(manager.email).toBe('neo@gmail.com');
  expect(manager.getEmail()).toBe('neo@gmail.com');
  expect(manager.getOfficeNumber()).toBe('3852152913');
  expect(manager.getRole()).toEqual('Manager');
});
