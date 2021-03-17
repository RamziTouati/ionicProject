import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  public inscrit:FormGroup;
  constructor(public formbuilder: FormBuilder, public navCtrl: NavController) {
    this.inscrit = formbuilder.group({
      fullname:["",[Validators.required,Validators.minLength(8)]],
      email:["",[Validators.required, Validators.email]],
      age:["",[Validators.required, Validators.min(1) ,Validators.max(99)]],
      password:["",[Validators.required ,Validators.minLength(5) ,Validators.maxLength(15)]],
    })
   }


   oninscrit(){
    console.log(this.inscrit.value);

  }
  BackToArticle(){
    this.navCtrl.navigateForward("/home")
  }

  ngOnInit() {
  }

}
