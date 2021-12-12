// array of each HTML card created for each item in employees array
const teamHtmlData = []

const generateHTML = employeeArrData => {
  // return HTML template with added employee card HTML content
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>
  <body>
    <header class="bg-dark text-white fs-1 p-3">
      Team Profile Generator
    </header>
    <main class="container m-5">
      <section class="row row-cols-3">
        ${createCards(employeeArrData)}
      </section>
    </main>
  </body>
  </html>
  `
}

// fxn for creating cards
const createCards = employeeArrData => {
  employeeArrData.forEach(employee => {
    // get role of each employee to determine card title
    // use switch case instead of if-else for cleaner code and easier ability to add additional employee types later
    switch (employee.getRole()) {
      case 'Manager':
        teamHtmlData.push(mgrCard(employee))
        break
      case 'Engineer':
        teamHtmlData.push(engrCard(employee))
        break
      case 'Intern':
        teamHtmlData.push(internCard(employee))
        break
      default:
        break
    }
  })
  const empCardsHTML = teamHtmlData.join('')
  return empCardsHTML
}

// fxn for generating mgr cards
const mgrCard = manager => {
  // spaces included for HTML formatting purposes
  return `
        <div class="col-12">
          <div class="card m-3 shadow">
            <div class="card-header bg-primary text-white">
              Manager
            </div>
            <div class="card-body">
              <p class="card-text fw-bold">${manager.name}</p>
              <p class="card-text">Employee ID: ${manager.id}</p>
              <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p class="card-text">Office Number: ${manager.officeNumber}</p>
            </div>
          </div>
        </div>
  `
}

// fxn for generating engr cards
const engrCard = engineer => {
  // spaces included for HTML formatting purposes
  return `
        <div class="col">
          <div class="card m-3 shadow">
            <div class="card-header bg-info text-white">
              Engineer
            </div>
            <div class="card-body">
              <p class="card-text fw-bold">${engineer.name}</p>
              <p class="card-text">Employee ID: ${engineer.id}</p>
              <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p class="card-text">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>
          </div>
        </div>
  `
}

// fxn for generating intern cards
const internCard = intern => {
  return `
        <div class="col">
          <div class="card m-3 shadow">
            <div class="card-header bg-secondary text-white">
              Intern
            </div>
            <div class="card-body">
              <p class="card-text fw-bold">${intern.name}</p>
              <p class="card-text">Employee ID: ${intern.id}</p>
              <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="card-text">School: ${intern.school}</p>
            </div>
          </div>
        </div>
  `
}

module.exports = generateHTML
