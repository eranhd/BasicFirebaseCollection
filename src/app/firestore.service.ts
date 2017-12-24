import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Item } from './model/item.model';

@Injectable()
export class FirestoreService {


  private itemRef: AngularFirestoreCollection<any>
  private _allItems: Item[]
  constructor(private afs: AngularFirestore) {
    this.itemRef = this.afs.collection("item")
    this.itemRef.valueChanges().subscribe(items=>{
      this._allItems = items
    })
  }

  public save(item: any): void {
    this.itemRef.add(item).then(res => {

    })
  }

  public get allItems(){
    return this._allItems ? this._allItems : []
  }




}
