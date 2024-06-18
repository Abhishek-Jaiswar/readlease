import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './db/index.js';

dotenv.config(); // Load environment variables before using them

const app = express();
app.use(express.json())


const startServer = async () => {
  try {
    await connectToDb()

    app.post("/signup", (req, res) => {
      console.log(req.body);
      res.json(req.body)
    })


    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server is listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer()


