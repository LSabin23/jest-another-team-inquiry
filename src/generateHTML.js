// array of each HTML card created for each item in employees array
const teamHtmlData = []

const generateHTML = employeeArrData => {
  // return HTML template with added employee card HTML content
  return `
  <
    ${createCards(employeeArrData)}
  `
}

// fxn for creating cards
const createCards = employeeArrData => {
  employeeArrData.forEach(employee => {
    // get role of each employee to determine card title
    // use switch case instead of if-else for cleaner code and easier ability to add additional employee types later
    switch (employee.getRole()) {
      case 'Manager':
        // call mgr card fxn
        // push new card item to teamHtmlData array
        break
      case 'Engineer':
        // call engr card fxn
        // push new card item to teamHtmlData array
        break
      case 'Intern':
        // call intern card fxn
        // push new card item to teamHtmlData array
        break
      default:
        break
    }
  })
  const empCardsHTML = teamHtmlData.join('')
  return empCardsHTML
}

/* fxn for generating mgr cards
const mgrCard = manager => {
  return `
  // create html for mgr
  `
}
*/

/* fxn for generating engr cards
const engrCards = engineer => {
  return `
  // create html for engr
  `
}
*/

/* fxn for generating intern cards
const internCards = intern => {
  return `
  // create html for intern
  `
}
*/

module.exports = generateHTML
