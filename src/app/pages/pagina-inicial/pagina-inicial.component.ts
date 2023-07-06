import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent {
  inputValor:string ='' ;
  constructor(private route: Router){}


  entrar(){
   if(this.inputValor===''){
    alert('Digite um usuario')
   }else {
    window.sessionStorage.setItem('usuario', this.inputValor)
    this.route.navigate(['/notas'])
  }
  }
}
