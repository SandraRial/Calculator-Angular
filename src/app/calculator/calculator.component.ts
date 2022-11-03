import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  deshabilitar = false;
  amountA: number = 0;
  amountB: number = 0;
  result: number = 0;

  sumar(): void {
    this.result = this.amountA + this.amountB;

    // this.result = sum;
  }
}
