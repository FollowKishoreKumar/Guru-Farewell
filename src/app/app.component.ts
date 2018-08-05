import { Component, TemplateRef, ViewEncapsulation, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Messages } from './messages';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'app';
  modalRef: BsModalRef;
  messages: Messages[];
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.messages = [{
      "name": "Manimegalai",
      "message": "Good mentor..      You know how to get the work done..      Talented personality..      Encouraging..      Good to work with you..      Talkative..      All the best for your future..      Take care..       You will be missed Guru..      Byeeeeeee..🙂"
    },
    {
      "name": "Jagan",
      "message": "வாழ்க,வளமுடன்"
    },
    {
      "name": "Manisha",
      "message": "Guru... You are our Guru like ur name.. U always encourage us and mould us to be a good developer.. U taught us,how to enjoy our work. U showed us a good path to reach our successful destination in career.all the best for your future and may it be successfull.. We'll miss you Guru.."
    },
    {
      "name": "Subathra",
      "message": "All the very best Guru.. I totally admire your leadership skills.. I wish I could have worked with u more. But wherever you go, you will be a star performer. My Best wishes!"
    },
    {
      "name": "Sneha",
      "message": "It was really great working with you. You will be missed. All the best for your future endeavors Guru!"
    },
    {
      "name": "Prasanth",
      "message": "All the best guru, wishing you for successful potential talent exposure there !"
    },
    {
      "name": "Gopal",
      "message": "Best of Luch Guru !"
    },
    {
      "name": "Annapoorani",
      "message": "Congratulations and All the Best 🙂 "
    },
    {
      "name": "Vignesh",
      "message": "Best Wishes for your career Ahead Guru 🙂 "
    },
    {
      "name": "Siva",
      "message": "All the very best for your future boss. Semma skilled, talented and down to earth person ! Will miss the short talks about stuffs, we used to have 🙂 "
    },
    {
      "name": "Amutha",
      "message": "All the very best Guru 🙂 "
    },
    ]
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  callFacebook() {
    window.open('https://www.facebook.com/kishoreclickr');
  }
  callInstagram() {
    window.open('https://www.instagram.com/kishore_clickr');
  }
  callTwitter() {
    window.open('https://twitter.com/kishoreclickr');
  }
  callLinkedIN() {
    window.open('https://www.linkedin.com/in/kishore-kumar-s-277243b7');
  }
  callGmail() {
    window.open('mailTo(followkishorekumar@gmail.com)')
  }



}
