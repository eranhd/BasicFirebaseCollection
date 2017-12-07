import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string;
  public lname: string;
  private itemDoc: AngularFirestoreDocument<any>;
  private col: AngularFirestoreCollection<any>;
  public users;

  public ob;

  constructor(private afs: AngularFirestore) {
    this.itemDoc = this.afs.doc("users/1");
    this.col = this.afs.collection("users");
    this.col.valueChanges().subscribe(res => {
      // console.log(res);
      this.users = res;
    });
    this.ob = this.col.valueChanges();
    // this.name = item.name;
    // this.lname = item.lname;


  }
  send() {

    this.col.add({ name: this.name, lname: this.lname }).then(res => {
      // alert(res);
    })
  }
}
