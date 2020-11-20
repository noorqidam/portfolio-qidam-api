const express = require("express");
const server = express();
const bodyParser = require('body-parser');

async function runServer() {
  await require('./db/').connect()

  server.use(bodyParser.json());
  const portfolioRoutes = require("./routes/portfolios");
  
  server.get("/test", (req, res) => {
    return res.json({ message: "test is working!" });
  });
  
  server.use("/api/v1/portfolios", portfolioRoutes);
  // GET ENDPOINT /api/v1/portfolios -> [1,2,3]
  
  const PORT = parseInt(process.env.PORT, 10) || 3001;
  server.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log("Server ready on port:", PORT);
  });
}


runServer();
