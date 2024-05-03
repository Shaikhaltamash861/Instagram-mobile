import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  username: string = 'example_username';
  bio: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  followingCount: number = 500;
  followersCount: number = 1000;
  postsCount: number = 20;

  posts = [
    { imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2021/04/28/Ramadan-Moon-Star-Fill-Line-Icon-Graphics-11438142-1.jpg' },
    { imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2021/04/28/Ramadan-Moon-Star-Fill-Line-Icon-Graphics-11438142-1.jpg' },
    { imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2021/04/28/Ramadan-Moon-Star-Fill-Line-Icon-Graphics-11438142-1.jpg' },
    { imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2021/04/28/Ramadan-Moon-Star-Fill-Line-Icon-Graphics-11438142-1.jpg' },
    { imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2021/04/28/Ramadan-Moon-Star-Fill-Line-Icon-Graphics-11438142-1.jpg' },
    { imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2021/04/28/Ramadan-Moon-Star-Fill-Line-Icon-Graphics-11438142-1.jpg' },
    { imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2021/04/28/Ramadan-Moon-Star-Fill-Line-Icon-Graphics-11438142-1.jpg' },
    // Add more post objects as needed
  ];

  constructor(private router: Router) { }

  editProfile() {
    // Navigate to edit profile page
    this.router.navigateByUrl('/edit-profile');
  }

}
