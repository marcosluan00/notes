import { Component } from '@angular/core';
import {  Router } from '@angular/router';
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

  constructor( private notasService: NotasService, private rotas: Router ){}

  enviarFormulario(){
    if(this.formulario.descricao ==''|| this.formulario.titulo ===''){
      alert('Preencha os campos')
    } else {
      this.notasService.setNotas(this.formulario.titulo, this.formulario.descricao).subscribe(()=>{
        this.reloadPage();
      })
    }
  }
  reloadPage() {
    const currentUrl = this.rotas.url;
    this.rotas.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.rotas.navigateByUrl(currentUrl);
    });
  }
}
