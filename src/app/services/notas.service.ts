import { Injectable } from '@angular/core';
import { doc, getDoc,getDocs, collection } from "firebase/firestore";
import { ConexaoComFirebaseService } from './conexao-com-firebase.service';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private firebaseDados: ConexaoComFirebaseService) { }

  getNotas(){
    const docSnap = getDocs(collection(this.firebaseDados.db, 'Notas'))
    docSnap.then((res) => {
      res.forEach((notas)=> {
        console.log(notas.data())
      })
    }).catch((error) => {
      console.log(error)
    })

  }
}
