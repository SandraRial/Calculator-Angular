import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator-in-angular';
  resultadoPadre: number;
  processResult(resultado: number) {
    this.resultadoPadre = resultado;
  }
}
