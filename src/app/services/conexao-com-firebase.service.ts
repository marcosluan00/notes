import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ConexaoComFirebaseService {

  constructor() {}
  //INICIALIZANDO
  app = initializeApp(environment.firebaseConfig);
  //Banco de dados
  db = getFirestore(this.app);


}
