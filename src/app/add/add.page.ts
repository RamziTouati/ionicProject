import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ArticlesService } from '../services/articles.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  public add:FormGroup;
  constructor(public formbuilder: FormBuilder, public navCtrl: NavController, public articleServive: ArticlesService) {
    this.add = formbuilder.group({
      name:["",[Validators.required,Validators.minLength(3), Validators.maxLength(10)]],
      category:["",[Validators.required]],
      prix:["",[Validators.required]],
    })
   }


  onAdd(){
    const data= this.add.value;
    this.articleServive.createArticle(data).subscribe((response)=>{
      console.log(response);
      this.navCtrl.pop();
    }

    )
  }

  BackToArticle(){
    this.navCtrl.navigateForward("/article")
  }

  ngOnInit() {
  }

}
