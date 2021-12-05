const Intern = require('../lib/Intern')

test('creates new Intern object', () => {
  const intern = new Intern('Lucy', '004', 'lucy.skybeatle@gmail.com', 'Diamondale High')

  expect(intern.name).toBe('Lucy')
  expect(intern.id).toBe('004')
  expect(intern.email).toBe('lucy.skybeatle@gmail.com')
  expect(intern.school).toBe('Diamondale High')
})

test('gets intern school', () => {
  const intern = new Intern('Lucy', '004', 'lucy.skybeatle@gmail.com', 'Diamondale High')

  expect(intern.getSchool()).toBe('Diamondale High')
})

test('gets intern role', () => {
  const intern = new Intern('Lucy', '004', 'lucy.skybeatle@gmail.com', 'Diamondale High')

  expect(intern.getRole()).toBe('Intern')
})
