import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

export interface IBox {
  id: String;
  background: String;
}

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private store: AngularFirestore) {}

  getBox(): Observable<IBox[]> {
    return this.store.collection<IBox>('boxes').valueChanges({idField: "id"})
  }

  updateColor(color, id): Promise<void> {
    return this.store.collection<IBox>('boxes').doc(id).update(color)
  }
}
