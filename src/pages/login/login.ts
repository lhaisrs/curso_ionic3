import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //Páginas de navegação
  client: any = 'HomePage';
  func: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openCliente(){
    this.navCtrl.setRoot(this.client);
  }

  openFuncionario(){
    let alert = this.alertCtrl.create({
      title: 'Atenção',
      message: 'Serviço ainda não disponível',
      buttons: [{
        text: 'Ok',
        handler: () => {}
      }]
    });

    alert.present();
  }

}
