import { Component } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';
import { Notas } from 'src/app/shared/models/notas.model';

@Component({
  selector: 'app-paginas-de-notas',
  templateUrl: './paginas-de-notas.component.html',
  styleUrls: ['./paginas-de-notas.component.css']
})
export class PaginasDeNotasComponent {
  notasArray: Notas[] = [];

  constructor(private notasService: NotasService){}

  ngOnInit(){
    this.getNotas();
  }

  getNotas(){
    this.notasService.getNotas().subscribe((dados) => {
      dados.forEach((notas) => {
        this.notasArray.push(notas)
      })
    })
  }

}
