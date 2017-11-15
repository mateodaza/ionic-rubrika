import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-asignaturas',
  templateUrl: 'asignaturas.html',
})
export class AsignaturasPage {
  asignaturasRef: AngularFireList<any>;
  asignaturas: Observable<any[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  	public alertCtrl: AlertController,
    public database: AngularFireDatabase
  ) {

    this.asignaturasRef = this.database.list('users/test/asignaturas');
    this.asignaturas = this.asignaturasRef.snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

  }

  createAsignatura(){
    let newTaskModal = this.alertCtrl.create({
      title: 'Nueva Asignatura',
      message: "Crear nueva asignatura",
      inputs: [
        {
          name: 'Nombre',
          placeholder: 'nombre'
        },
        {
          name: 'wtvr',
          placeholder: 'wtvr'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Crear',
          handler: data => {
            this.asignaturasRef.push({
              nombre: data.Nombre,
              wtvr: data.wtvr
            });
          }
        }
      ]
    });
    newTaskModal.present( newTaskModal );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsignaturasPage');
  }

}
