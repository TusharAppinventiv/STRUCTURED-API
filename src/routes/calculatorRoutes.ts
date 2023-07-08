import { Router } from 'express';
import { CalculatorController } from '../controllers/calculatorController';

const router = Router();
const calculatorController = new CalculatorController();

router.post('/add', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  const result = calculatorController.add(a, b);
  res.send(result.toString());
});

router.post('/subtract', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  const result = calculatorController.subtract(a, b);
  res.send(result.toString());
});

router.post('/multiply', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  const result = calculatorController.multiply(a, b);
  res.send(result.toString());
});

router.post('/divide', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  const result = calculatorController.divide(a, b);
  res.send(result.toString());
});

export default router;
