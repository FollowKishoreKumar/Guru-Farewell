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
    this.messages = [
    {
      "name": "Jagan",
      "message": "வாழ்க,வளமுடன்"
    },
    {
      "name": "Subathra",
      "message": "All the very best Guru.. I totally admire your leadership skills.. I wish I could have worked with u more. But wherever you go, you will be a star performer. My Best wishes!"
    },
    {
      "name": "Sneha",
      "message": "It was really great working with you. You knew how to bring the best out of us. A humble and down to earth person, you will definitely be missed. All the best for your future endeavors Guru!"
    },
    {
      "name": "Prasanth",
      "message": "All the best guru, wishing you for successful potential talent exposure there !"
    },
    {
      "name": "Gopal",
      "message": "Best of Luck Guru !"
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
    {
      "name": "Manimegalai",
      "message": "Good mentor..      You know how to get the work done..      Talented personality..      Encouraging..      Good to work with you..      Talkative..      All the best for your future..      Take care..       You will be missed Guru..      Byeeeeeee..🙂"
    },
    {
      "name": "Sugeetha",
      "message": "We were really happy to work with you .      The days we worked with you will be the best experience in my career.      Thanks alot for bearing us.      You will be missed."
    },
    {
      "name": "Preethi",
      "message": "Hi Guru , You are leaving this office but ur fame will remain here forever... Best wishes for ur future...🙂 "
    },
    {
      "name": "Padmavathy",
      "message": "Hi Guru. Wishing you a bright and happy future ahead. I wish you a happy farewell . We all will surely miss all your guide. We learnt a lot from you in terms of development and life guru. Not only in name. In real life also you are good Guru only. Thanks for all the guide guru. With all the happiness and good wishes🙂 "
    },
    {
      "name": "Jerish",
      "message": "All the best Guru , Farewell 🙂 "
    },
    {
      "name": "Vishal",
      "message": "Thanks for all the lessons that you teach me. I didn’t worked closely with you but like the way you manage the team and I learnt from that. For me you are one of the best team leader. Have a great and fantastic years ahead.Stay in touch...!!🙂 "
    },
    {
      "name": "Bala",
      "message": "Dedicated and helping person . Good luck for your career"
    },
    {
      "name": "Manisha",
      "message": "Guru... You are our Guru like ur name.. U always encourage us and mould us to be a good developer.. U taught us,how to enjoy our work. U showed us a good path to reach our successful destination in career.all the best for your future and may it be successfull.. We'll miss you Guru.."
    },
    {
      "name": "Chandra",
      "message": "I wish you all the best in your life. Heartfelt goodbye from all of your coworkers."
    },
    {
      "name": "Praveen",
      "message": "Wish you a happy life ahead ! Work hard , party even harder ! Spread smile 😇"
    },
    {
      "name": "Sakshi",
      "message": "You are so supportive , so understanding ,you have encouraged me to learn new things.It was nice working with you Guru .May you get all the desires fulfilled  🙂" 
    },
    {
      "name": "Karthikeyan",
      "message": "All the very best for all your endeavors Guru. Keeping rocking !"
    },
    {
      "name": "Arun Gopal",
      "message": "Congratulations and all the very best for your future endeavors Guru..."
    },
    {
      "name": "Kumaresh",
      "message": "Happy farewell to a genuine techie and talented person. Wishing you all the very best on  your future endeavours 🙂 "
    },
    {
      "name": "Bijan",
      "message": "All the Best. Right Decision at Right Time."
    },
    {
      "name": "Asif",
      "message": "Wish you best of luck and success in your life"
    },
    {
      "name": "Swetha Chandrasekaran",
      "message": "Thank u Guru for everything. One of the best mentor who guided me from the very start. U have taught us what the actual corporate world is in a  very simple and easy way. Have a  gr8 start for Ur future endevear.🙂"
    },
    {
      "name": "Lokesh",
      "message": "All the best for your new Career"
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
