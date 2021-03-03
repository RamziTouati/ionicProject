import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  constructor(public navCtrl: NavController) {}


  addArticle(){
    this.navCtrl.navigateForward("/add");
  }

  goToDetail(id){
    this.navCtrl.navigateForward("/details/"+id);
  }

  articles=[
    {
      id: '1',
      titre:'titre 1',
      email:'ram@test.tech',
      photo:'../../assets/images/img_snow_wide.jpg'
    },
    {
      id: '2',
      titre:'titre 2',
      email:'ram@test.tech',
      photo:'../../assets/images/img_snow_wide.jpg'
    },
    {
      id: '3',
      titre:'titre 3',
      email:'ram@test.tech',
      photo:'../../assets/images/img_snow_wide.jpg'
    },
    {
      id: '4',
      titre:'titre 4',
      email:'ram@test.tech',
      photo:'../../assets/images/img_snow_wide.jpg'
    }
  ]
  ngOnInit() {
  }

}
