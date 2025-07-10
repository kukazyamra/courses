import express, { Express } from "express";
const app: Express = express();
import './utils/load-env.js'

console.log(process.env);
app.use(express.json());


const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Response');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});