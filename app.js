const { appsignal } = require("./appsignal");
const { expressMiddleware, expressErrorHandler } = require("@appsignal/express");
const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();
app.use(expressMiddleware(appsignal));
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("GET /");
  res.send("Hello world");
});
app.get("/demo", (req, res) => {
  console.log("GET /demo");
  res.send("Demo");
});
app.get("/error", (req, res) => {
  console.log("GET /error");
  throw new Error('Whoops!')
  res.send("Oops");
});
app.use(expressErrorHandler(appsignal))

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

console.log("started")
appsignal.metrics().incrementCounter("test2", 1);
