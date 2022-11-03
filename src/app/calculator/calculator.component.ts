import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  deshabilitar = false;
  amountA = '';
  amountB = '';
  result = '';

  sumar() {
    let sum = this.amountA + this.amountB;
    console.log(sum);
    this.result = sum;
  }
}
