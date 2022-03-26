const fs = require('fs');
const htmlContent = require('../src/template-html');

module.exports =() => fs.writeFile('./dis/team.html', htmlContent, err => (err ? console.log(err) : console.log('HTML file generated')));
