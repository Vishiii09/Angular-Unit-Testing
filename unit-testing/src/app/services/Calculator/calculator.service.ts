import { Injectable } from '@angular/core';
import { LoggerService } from '../Logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private loggerService: LoggerService) {}

  add(a: number, b: number) {
    this.loggerService.log('Add operation is called!!');
    return a + b;
  }

  sub(a: number, b: number) {
    this.loggerService.log('Substract operation is called!!');
    return a - b;
  }
}
