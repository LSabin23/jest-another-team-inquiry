const Engineer = require('../lib/Engineer')

test('creates new Engineer object', () => {
  const engineer = new Engineer('Lenny', '003', 'lenny.n.arthur@yahoo.com', 'LennyRDR2')

  expect(engineer.name).toBe('Lenny')
  expect(engineer.id).toBe('003')
  expect(engineer.email).toBe('lenny.n.arthur@yahoo.com')
  expect(engineer.github).toBe('LennyRDR2')
})

test('gets engineer GitHub username', () => {
  const engineer = new Engineer('Lenny', '003', 'lenny.n.arthur@yahoo.com', 'LennyRDR2')

  expect(engineer.getGithub()).toBe('LennyRDR2')
})

test('gets engineer role', () => {
  const engineer = new Engineer('Lenny', '003', 'lenny.n.arthur@yahoo.com', 'LennyRDR2')

  expect(engineer.getRole()).toBe('Engineer')
})
