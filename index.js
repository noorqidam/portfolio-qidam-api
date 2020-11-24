const express = require("express");
const server = express();
const bodyParser = require('body-parser');
const cors = require("cors");

async function runServer() {
  await require('./db').connect()

  server.use(bodyParser.json());
  server.use("/api/v1/portfolios", require("./routes/portfolios"));
  server.use("/api/v1/blogs", require("./routes/blogs"));
  
  server.get("/test", (req, res) => {
    res.json({ message: "test is working!" });
  });

  server.use(cors());
  
  const PORT = parseInt(process.env.PORT, 10) || 3001;
  server.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log("Server ready on port:", PORT);
  });
}


runServer();
