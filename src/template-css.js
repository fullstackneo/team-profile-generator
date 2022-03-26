module.exports = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: rgb(0, 119, 247);
}

html {
  font-family: Open sans;
}
header {
  text-align: center;
  padding: 30px;
  margin-bottom: 30px;
  color: white;
  background-color: rgb(232, 71, 86);
}

section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

article {
  flex: 0 0 250px;
  border-radius: 8px;
  margin: 10px;
  box-shadow: 4px 4px 4px #808080;
}

.title {
  background-color: rgb(0, 119, 247);
  border-radius: 4px 4px 0 0;
  color: white;
  padding: 15px;
}

.title h2 {
  font-size: 18px;
  margin-bottom: 5px;
}

.title p {
  font-size: 15px;
}

.contact {
  font-size: 10px;
  background-color: rgb(246, 246, 248);
  border-radius: 0 0 4px 4px;
  padding: 15px;
}

.contact ul {
  background-color: #fff;
}

.contact li {
  padding: 8px;
  border: 1px solid rgb(202, 202, 202);
}

.contact li:nth-child(2) {
  border-top: none;
  border-bottom: none;
}
`;
