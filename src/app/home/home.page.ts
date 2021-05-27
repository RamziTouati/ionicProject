import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  constructor(public navCtrl: NavController, public api: ApiService) {}
  NavigateToAbout(){
    this.navCtrl.navigateForward("/about")
  }

  ngOnInit() {
	  this.getDataUser();
  }
  async getDataUser() {
    await this.api.getDataUser()
      .subscribe(res => {
        console.log(res);
        this.data = res.results;
      }, err => {
        console.log(err);
      });
  }

}
