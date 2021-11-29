const express = require("express");
const { sayHello } = require("./say-hello");

const port = parseInt(process.env.PORT) || 3000;

const app = express()

app.get("/", (req, res) => {
  const message = sayHello();
  req.send({ message })
})

app.get("/:name", (req, res) => {
  const message = sayHello(req.params.name)
  req.send({ message })
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}/`)
})
