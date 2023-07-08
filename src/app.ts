import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import calculatorRoutes from './routes/calculatorRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
