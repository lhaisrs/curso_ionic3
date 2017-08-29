import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';


@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  username: string = '';

  //Páginas de navegação
  cardapio: any = 'ListPage';
  login: any = 'LoginPage';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  onOpen(){
    let alert = this.alertCtrl.create({
      title: "Bem vindo(a):",
      message: 'Seja bem vindo(a) ao Restaurante ' + this.username,
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.navCtrl.push(this.cardapio);
        }
      }]
    });

    alert.present();
  }

  onExit(){
    this.navCtrl.setRoot(this.login);
  }

}
