const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/../dist"));

// app.get("*", (req, res) => {
//   const dir = path.resolve(__dirname + "/../dist/index.html");
//   res.sendFile(dir);
// });

app.listen(process.env.PORT || 80, () => {
  console.log("Listening on port: ", process.env.PORT || 80);
});
