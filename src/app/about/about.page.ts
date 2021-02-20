import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public navCtrl: NavController) {}
  BackToHome(){
    this.navCtrl.navigateForward("/home")
  }

  contact={
    name:'ramzi',
    email:'ram@test.tech',
    photo:'assets/img/logo.png'
  }
  
  ngOnInit() {
  }

}
