import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  public add:FormGroup;
  constructor(public formbuilder: FormBuilder, public navCtrl: NavController) {
    this.add = formbuilder.group({
      name:["",[Validators.required,Validators.minLength(3), Validators.maxLength(10) ]],
      email:["",[Validators.required, Validators.email]],
      country:["",[Validators.required]],
    })
   }


  onAdd(){
    console.log(this.add.value);

  }

  BackToArticle(){
    this.navCtrl.navigateForward("/article")
  }

  ngOnInit() {
  }

}
