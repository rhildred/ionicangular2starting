import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  model={name:""};
  constructor(public navCtrl: NavController) {

  }
  hiThere(){
    alert("Hi there " + this.model.name);
  }

}
