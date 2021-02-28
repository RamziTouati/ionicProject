import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.page.html',
  styleUrls: ['./detail-article.page.scss'],
})
export class DetailArticlePage implements OnInit {

  constructor(public navCtrl: NavController) {}
  BackToArticle(){
    this.navCtrl.navigateForward("/article")
  }
  ngOnInit() {
  }

}
