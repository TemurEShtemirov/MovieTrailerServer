import express from "express";
import "dotenv/config";

async function bootsrap() {
  const app = express();
  const port = process.env.PORT || 4853;
  app.use(express.json);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Server running on port : http://localhost:${port}`);
  });
}

bootsrap();
