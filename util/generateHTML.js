const fs = require('fs');

module.exports = htmlContent => fs.writeFile('./dis/team.html', htmlContent, err => (err ? console.log(err) : console.log('HTML file generated')));
