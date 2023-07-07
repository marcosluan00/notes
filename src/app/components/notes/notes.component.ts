import { Component, Input, OnInit } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';
import { Notas } from 'src/app/shared/models/notas.model';

import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{
    @Input() notas?: Notas;
    dadaPostagem?: Date;
    constructor(private notasservice: NotasService){}

    ngOnInit():void {

    }

}
