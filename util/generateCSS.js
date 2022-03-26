const fs = require('fs');

module.exports = cssContent => fs.writeFile('./dis/style.css', cssContent, err => (err ? console.log(err) : console.log('css file generated')));
