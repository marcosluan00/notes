import { Component, OnInit } from '@angular/core';
import { ConexaoComFirebaseService } from 'src/app/services/conexao-com-firebase.service';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{

    constructor(private notasservice: NotasService){}

    ngOnInit():void {
      this.notasservice.getNotas()
    }
}
