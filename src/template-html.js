const generateProfile = obj => {
  const { name, id, email, ...rest } = obj;

  let additionHTML = ``;
  let position;
  if (rest.github) {
    position = 'Engineer';
    additionHTML = `Github: <a href="https://github.com/${rest.github}/">${rest.github}</a>`;
  } else if (rest.school) {
    position = 'Intern';
    additionHTML = `School: ${rest.school}`;
  } else if (rest.officeNumber) {
    position = 'Manager';
    additionHTML = `Office number: ${rest.officeNumber}`;
  }

  return `<article>
        <div class="title">
          <h2>${name}</h2>
          <div>
          <div><img src='../assets/icons/${position}.svg' alt='${position} icon' /></div>
          <p>${position}</p></div>
        </div>
        <div class="contact">
          <ul>
            <li>ID: <span>${id}</span></li>
            <li>Email: <a href="mailto:${email}">${email}</a></li>
            <li>${additionHTML}</li>
          </ul>
        </div>
      </article>`;
};

const generateArray = arrayData => {
  if (!arrayData) {
    return ``;
  }
  return arrayData.map(el => generateProfile(el)).join('');
};

module.exports = templateData => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <section>
      ${generateProfile(templateData.manager)}
      ${generateArray(templateData.engineer)}
      ${generateArray(templateData.intern)}
    </section>
  </body>
</html>
`;
};
