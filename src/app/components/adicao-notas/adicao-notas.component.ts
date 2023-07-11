import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormularioComponent } from '../formulario/formulario.component';
@Component({
  selector: 'app-adicao-notas',
  templateUrl: './adicao-notas.component.html',
  styleUrls: ['./adicao-notas.component.css']
})
export class AdicaoNotasComponent {

  constructor(public dialogRef: MatDialogRef<FormularioComponent>) {}

  fecharFormulario(): void {
    this.dialogRef.close();
  }

}
