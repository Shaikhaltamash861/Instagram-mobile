import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent  implements OnInit {

  constructor() { }
  posts = [
    {
      username: 'user2',
      avatar: '../../assets/pubg.jpg',
      caption: 'Beautiful sunset 🌅',
      image: '../../assets/pubg.jpg'
    },
    {
      username: 'user2',
      avatar: '../../assets/icon/favicon.png',
      caption: 'Beautiful sunset 🌅',
      image: '../../assets/pubg.jpg'
    },
    {
      username: 'user2',
      avatar: '../../assets/icon/favicon.png',
      caption: 'Beautiful sunset 🌅',
      image: '../../assets/pubg.jpg'
    },
    {
      username: 'user2',
      avatar: '../../assets/icon/favicon.png',
      caption: 'Beautiful sunset 🌅',
      image: '../../assets/pubg.jpg'
    },
    {
      username: 'user2',
      avatar: '../../assets/icon/favicon.png',
      caption: 'Beautiful sunset 🌅',
      image: '../../assets/pubg.jpg'
    },
    {
      username: 'user2',
      avatar: '../../assets/icon/favicon.png',
      caption: 'Beautiful sunset 🌅',
      image: '../../assets/pubg.jpg'
    },
    {
      username: 'user2',
      avatar: '../../assets/icon/favicon.png',
      caption: 'Beautiful sunset 🌅',
      image: '../../assets/pubg.jpg'
    },
    {
      username: 'user2',
      avatar: '../../assets/icon/favicon.png',
      caption: 'Beautiful sunset 🌅',
      image: '../../assets/pubg.jpg'
    },
    
    // Add more posts here as needed
  ];
  ngOnInit() {}

}
