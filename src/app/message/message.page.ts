import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  contacts = [
    {
      name: 'Maria',
      phoneNumber: '09488745380',
      image: 'a.jpg',
    },
    {
      name: 'Dominic',
      phoneNumber: '09355543564',
      image: 'd.png',
    },
    {
      name: 'Angelo',
      phoneNumber: '09517664573',
      image: 'b.png',
    },
    {
      name: 'Niko',
      phoneNumber: '09518515381',
      image: 'e.png',
    },
    {
      name: 'Elrose',
      phoneNumber: '09503376844',
      image: 'd.png',
    },
    {
      name: 'Lumakad',
      phoneNumber: '09367656690',
      image: 'c.png',
    },
    {
      name: 'Hilley',
      phoneNumber: '09164412267',
      image: 'f.png',
    },
  ];

  customAlertOptions: any = {
    header: 'Contacts',
    translucent: true
  };

  constructor() { }

  ngOnInit() {
  }

}
