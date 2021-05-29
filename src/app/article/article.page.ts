import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostsapiService } from './../services/postsapi.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  articles: any;
  constructor(public navCtrl: NavController, public api: PostsapiService) {}


  addArticle(){
    this.navCtrl.navigateForward("/add");
  }

  goToDetail(item){
    this.navCtrl.navigateForward("/details", item);
  }

  
  // articles=[
  //   {
  //     id: '1',
  //     titre:'titre 1',
  //     email:'ram@test.tech',
  //     photo:'../../assets/images/img_snow_wide.jpg'
  //   },
  //   {
  //     id: '2',
  //     titre:'titre 2',
  //     email:'ram@test.tech',
  //     photo:'../../assets/images/img_snow_wide.jpg'
  //   },
  //   {
  //     id: '3',
  //     titre:'titre 3',
  //     email:'ram@test.tech',
  //     photo:'../../assets/images/img_snow_wide.jpg'
  //   },
  //   {
  //     id: '4',
  //     titre:'titre 4',
  //     email:'ram@test.tech',
  //     photo:'../../assets/images/img_snow_wide.jpg'
  //   }
  // ]
  ngOnInit() {
	  this.getDataPost();
  }
  async getDataPost() {
    await this.api.getDataPost()
      .subscribe(res => {
        this.articles = res;
        // console.log(this.articles[0].name);
      }, err => {
        console.log(err);
      });
  }

}
