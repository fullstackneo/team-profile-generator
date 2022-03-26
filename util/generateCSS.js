const fs = require('fs');
const cssContent = require('../src/template-css');

module.exports = () => fs.writeFile('./dis/style.css', cssContent, err => (err ? console.log(err) : console.log('css file generated')));
