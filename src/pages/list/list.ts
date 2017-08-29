import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  isClicked: boolean = false;
  items: Array<{title: string, price: string, image: string}>;
  login: any = 'LoginPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // Let's populate this page with some filler content for funzies
    this.items = [{title: 'Cerveja', price: 'R$5,00', image: '../../assets/images/beer.jpg'}, {title: 'Pizza', price: 'R$4,00', image: '../../assets/images/pizza.jpg'}, 
    {title: 'Macarronada', price: 'R$10,00', image: '../../assets/images/spaghetti.jpg'}, {title: 'Suco', price: 'R$6,00', image: '../../assets/images/juice.jpg'}];
  }

  onClicked(){
    this.isClicked = !this.isClicked;
  }

  onExit(){
    this.navCtrl.setRoot(this.login);
  }
}
