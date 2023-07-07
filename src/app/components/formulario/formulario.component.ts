import { Component } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario = {
    titulo:'',
    descricao: ''
  }

  constructor( private notasService: NotasService ){}

  enviarFormulario(){
    this.notasService.setNotas(this.formulario.titulo, this.formulario.descricao).subscribe(()=> {
      alert('Anotado')
      window.location.reload()
    })
  }
}
