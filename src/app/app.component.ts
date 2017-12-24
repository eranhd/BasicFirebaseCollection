import { Component, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Item } from "./model/item.model"
import { FirestoreService } from './firestore.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayedColumns = ['name', 'cost', 'discount', 'date'];
  dataSource 
  @ViewChild(MatSort) sort: MatSort;
  public itemToSave: Item = new Item();


  constructor(public fss: FirestoreService) {

    
  }


  save() {
    this.itemToSave.date = new Date()
    this.fss.save(
      {
        name: this.itemToSave.name,
        cost: this.itemToSave.cost,
        date: this.itemToSave.date,
        discount: this.itemToSave.discount
      }
    )
    this.dataSource = new MatTableDataSource(this.fss.allItems);
    this.itemToSave = new Item()

  }
}
