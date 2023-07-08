import { AddService } from '../services/addService';
import { SubtractService } from '../services/subtractService';
import { MultiplyService } from '../services/multiplyService';
import { DivideService } from '../services/divideService';

export class CalculatorController {
  private addService: AddService;
  private subtractService: SubtractService;
  private multiplyService: MultiplyService;
  private divideService: DivideService;

  constructor() {
    this.addService = new AddService();
    this.subtractService = new SubtractService();
    this.multiplyService = new MultiplyService();
    this.divideService = new DivideService();
  }

  public add(a: number, b: number): number {
    return this.addService.add(a, b);
  }

  public subtract(a: number, b: number): number {
    return this.subtractService.subtract(a, b);
  }

  public multiply(a: number, b: number): number {
    return this.multiplyService.multiply(a, b);
  }

  public divide(a: number, b: number): number {
    return this.divideService.divide(a, b);
  }
}
