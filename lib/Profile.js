const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const generateHTML = require('../src/generateHTML')

// MANAGER PROMPT QUESTIONS START
const mgrPrompts = [
  {
    type: 'input',
    name: 'mgrName',
    message: 'Please enter the name of the team manager.',
    validate: mgrNameInput => {
      if (mgrNameInput) {
        return true
      } else {
        console.log('Entry not recognized. Please enter the name of the team manager.')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'mgrId',
    message: 'Please enter the employee ID for this manager.',
    validate: mgrIdInput => {
      if (mgrIdInput) {
        return true
      } else {
        console.log('Entry not recognized. Please enter the employee ID for this manager.')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'mgrEmail',
    message: 'Please enter the email for this manager.',
    validate: mgrEmailInput => {
      if (mgrEmailInput) {
        return true
      } else {
        console.log('Entry not recognized. Please enter the email for this manager.')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'mgrOfficeNum',
    message: 'Please enter the office number for this manager.',
    validate: mgrOfficeNumInput => {
      if (mgrOfficeNumInput) {
        return true
      } else {
        console.log('Entry not recognized. Please enter the office number for this manager.')
      }
    }
  }]
// MANAGER PROMPT QUESTIONS END

// ENGINEER PROMPT QUESTIONS START
const engrPrompts = [
  {
    type: 'input',
    name: 'engrName',
    message: 'Please enter the name of the engineer.',
    validate: engrNameInput => {
      if (engrNameInput) {
        return true
      } else {
        console.log('Entry not recognized. Please enter the name of the engineer.')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'engrId',
    message: 'Please enter the employee ID for this engineer.',
    validate: engrIdInput => {
      if (engrIdInput) {
        return true
      } else {
        console.log('Entry not recognized. Please enter the employee ID for this engineer.')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'engrEmail',
    message: 'Please enter the email for this engineer.',
    validate: engrEmailInput => {
      if (engrEmailInput) {
        return true
      } else {
        console.log('Entry not recognized. Please enter the email for this engineer.')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'engrGithub',
    message: 'Please enter the GitHub username for this engineer.',
    validate: engrGithub => {
      if (engrGithub) {
        return true
      } else {
        console.log('Entry not recognized. Please enter the GitHub username for this engineer.')
      }
    }
  }
]
// ENGINEER PROMPT QUESTIONS END

// INTERN PROMPT QUESTIONS START
const internPrompts = [
  {
    type: 'input',
    name: 'internName',
    message: 'Please enter the name of the intern.',
    validate: internNameInput => {
      if (internNameInput) {
        return true
      } else {
        console.log('Entry not recognized. Please enter the name of the intern.')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'internId',
    message: 'Please enter the employee ID for this intern.',
    validate: internIdInput => {
      if (internIdInput) {
        return true
      } else {
        console.log('Entry not recognized. Please enter the employee ID for this intern.')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'internEmail',
    message: 'Please enter the email for this intern.',
    validate: internEmailInput => {
      if (internEmailInput) {
        return true
      } else {
        console.log('Entry not recognized. Please enter the email for this intern.')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'internSchool',
    message: 'Please enter the school for this intern.',
    validate: internSchoolInput => {
      if (internSchoolInput) {
        return true
      } else {
        console.log('Entry not recognized. Please enter the school for this intern.')
      }
    }
  }
]
// INTERN PROMPT QUESTIONS END

// MENU PROMPT START
const menuPrompt = [
  {
    type: 'list',
    name: 'menu',
    message: 'Select an option.',
    choices: ['Add an Engineer', 'Add an Intern', 'Finish']
  }
]
// MENU PROMPT END

function Profile () {
  this.employees = []
}

Profile.prototype.initProfile = function () {
  inquirer
    .prompt(mgrPrompts)
    .then(({ mgrName, mgrId, mgrEmail, mgrOfficeNum }) => {
      this.employees.push(new Manager(mgrName, mgrId, mgrEmail, mgrOfficeNum))

      this.promptMenu()
    })
}

Profile.prototype.promptMenu = function () {
  inquirer
    .prompt(menuPrompt)
    .then(({ menu }) => {
      if (menu === 'Add an Engineer') {
        return this.promptEngineer()
      } else if (menu === 'Add an Intern') {
        return this.promptIntern()
      } else {
        // console.log(this.employees)
        // finish is selected, stop app, and generate HTML
        let profilePage = generateHTML(this.employees)
        writeToFile(profilePage)
      }
    })
}

Profile.prototype.promptEngineer = function () {
  inquirer
    .prompt(engrPrompts)
    .then(({ engrName, engrId, engrEmail, engrGithub }) => {
      this.employees.push(new Engineer(engrName, engrId, engrEmail, engrGithub))

      this.promptMenu()
    })
}

Profile.prototype.promptIntern = function () {
  inquirer
    .prompt(internPrompts)
    .then(({ internName, internId, internEmail, internSchool }) => {
      this.employees.push(new Intern(internName, internId, internEmail, internSchool))

      this.promptMenu()
    })
}

const writeToFile = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', data, err => {
      if (err) {
        reject(err)
        return
      }

      resolve({
        ok: true,
        message: 'File created.'
      })
    })
  })
}

module.exports = Profile
