import { Component } from '@angular/core';
import { ProfileData } from './ProfileData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'github-profiles-angular';
  profileData: {} = <ProfileData>{};
  avatar_url?: string;
  bio?: string;
  blog?: string;
  followers?: number;
  following?: number;
  name?: string;
  repos_url?: string;
  location?: string;

  getProfileData(e: ProfileData) {
    this.profileData = e;
    
    this.avatar_url = e.avatar_url;
    this.bio = e.bio;
    this.blog = e.blog;
    this.followers = e.followers;
    this.following = e.following;
    this.name = e.name;
    this.repos_url = e.repos_url;
    this.location = e.location
    console.log(e);
  }
}
