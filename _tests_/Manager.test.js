const Manager = require('../lib/Manager')

test('creates new Manager object', () => {
  const manager = new Manager('Kiara', '002', 'kiara.plum@hotmail.com', '10A')

  expect(manager.name).toBe('Kiara')
  expect(manager.id).toBe('002')
  expect(manager.email).toBe('kiara.plum@hotmail.com')
  expect(manager.officeNumber).toBe('10A')
})

test('gets role for Manager', () => {
  const manager = new Manager('Kiara', '002', 'kiara.plum@hotmail.com', '10A')

  expect(manager.getRole()).toBe('Manager')
})
