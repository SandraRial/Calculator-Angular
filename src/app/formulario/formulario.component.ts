import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() resultadoSuma = new EventEmitter<number>();

  deshabilitar = false;

  amountA: number;
  amountB: number;

  sumar(): void {
    let resultado = this.amountA + this.amountB;
    this.resultadoSuma.emit(resultado);
  }
}
