import { Injectable } from '@angular/core';
import { getDocs, collection, addDoc } from "firebase/firestore";
import { ConexaoComFirebaseService } from './conexao-com-firebase.service';
import { Notas } from '../shared/models/notas.model';
import { map } from 'rxjs/operators'
import { Observable, from, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private firebaseDados: ConexaoComFirebaseService) { }

  getNotas(): Observable<Notas[]>{
    const notasCollection = collection(this.firebaseDados.db, 'Notas');

    return from(getDocs(notasCollection)).pipe(
      map((querySnapshot) => {
        const notas: Notas[] = [];

        querySnapshot.forEach((doc) => {
          const dados = doc.data();
          const nota: Notas = {
            data: dados['data'],
            descricao: dados['descricao'],
            titulo: dados['titulo'],
            usuario: dados['usuario'],
            likes: dados['likes']
          };
          notas.push(nota);
        });
        return notas;
      })
    );
  }
  setNotas(titulo:string, descricao: string): Observable<void> {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    const formularioEnviado = new Subject<void>();

    addDoc(collection(this.firebaseDados.db, 'Notas'), {
      data: dataFormatada,
      titulo: titulo,
      descricao: descricao,
      likes: 0,
      usuario: window.sessionStorage.getItem('usuario')
    }).then(()=> {
      formularioEnviado.next();
      formularioEnviado.complete();
    })
    .catch(error => {
      formularioEnviado.error(error)
    })
    return formularioEnviado.asObservable()
  }

}
