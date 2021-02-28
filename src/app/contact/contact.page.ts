import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor() { }
  contact={
    name:'Store',
    email:'store@test.com',
    hours:'7j/7j',
    phone:'+123 456 789',
    location:'sahloul',
  }
  ngOnInit() {
  }

}
