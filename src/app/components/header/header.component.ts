import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user:string|null = '';

  constructor(public dialog: MatDialog){}

  ngOnInit(){
      this.user = sessionStorage.getItem('usuario');
  }

  abrirFormulario():void {
    const dialogRef = this.dialog.open(FormularioComponent)

    dialogRef.afterClosed().subscribe()
  }

}
