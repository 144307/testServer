const express = require("express");

const hostname = "127.0.0.1";

const app = express();
app.use(express.static(__dirname + "/public/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("server");

app.get("/", (req, res) => {
  console.log("/api");
  res.send("server message");
});

app.get("/api", (req, res) => {
  console.log("/api");
  res.send("server message");
});

app.listen(Number(process.env.PORT), hostname, () => {
  console.log(`Server is running on http://${hostname}:${process.env.PORT}`);
});
// app.listen(8081, hostname, () => {
//   console.log(`Server is running on http://${hostname}:${8081}`);
// });
