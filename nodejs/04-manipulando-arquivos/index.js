const fs = require("fs");

fs.readFile("arquivo.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

const users = [
  { name: "Cledeocir", age: 30 },
  { name: "Alice", age: 27 },
];

fs.writeFile(
  "users.txt",
  JSON.stringify(users),
  {
    encoding: "utf-8",
    flag: "a",
  },
  (err) => {
    if (err) throw err;
    console.log("escrito com sucesso.");
  },
);
