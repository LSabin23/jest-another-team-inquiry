const Employee = require('../lib/Employee')

test('creates new Employee object', () => {
  const employee = new Employee('Nina', '001', 'nina.sul@email.com')

  expect(employee.name).toBe('Nina')
  expect(employee.id).toBe('001')
  expect(employee.email).toBe('nina.sul@email.com')
})

test('gets name of employee', () => {
  const employee = new Employee('Nina', '001', 'nina.sul@gmail.com')

  expect(employee.getName()).toBe('Nina')
})

test('gets Id of employee', () => {
  const employee = new Employee('Nina', '001', 'nina.sul@gmail.com')

  expect(employee.getId()).toBe('001')
})

test('gets email of employee', () => {
  const employee = new Employee('Nina', '001', 'nina.sul@gmail.com')

  expect(employee.getEmail()).toBe('nina.sul@gmail.com')
})

test('gets role of employee', () => {
  const employee = new Employee('Nina', '001', 'nina.sul@gmail.com')

  expect(employee.getRole()).toBe('Employee')
})
