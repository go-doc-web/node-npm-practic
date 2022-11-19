const express = require("express");
const app = express();

app.use("*", (req, res) => {
  res.send("<h1>Hellow Oleg!!!!</h1>");
  console.log("Was brauser zapros");
});

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

const listener = app.listen(4444, () => {
  console.log(`Server GO in the port ${listener.address().port}`);
});
