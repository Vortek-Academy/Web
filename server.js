const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static(require("path").resolve(`${__dirname}/dist/`)));
app.set("views", `${__dirname}/dist/`);

app.get("*", (req, res) => {
  res.sendFile(require("path").resolve(`${__dirname}/dist/index.html`));
});

app.listen(3000, "localhost", () =>
  console.log("Server started successfully!")
);
