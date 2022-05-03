import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ProfileData } from '../ProfileData';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})

export class ToolbarComponent implements OnInit {
  @Output() sendProfileData: EventEmitter<ProfileData> = new EventEmitter();
  query: string = ""
  private apiUrl = 'https://api.github.com/users/';
  profileData: {} = <ProfileData>{}

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getData(event: any) {
    event.preventDefault();
    this.query = event.target[0].value
    
    return this.http.get(this.apiUrl + this.query).subscribe((res: any) => {
      this.profileData = <ProfileData>{
        avatar_url : res.avatar_url,
        bio: res.bio,
        blog: res.blog,
        followers: res.followers,
        following: res.following,
        name: res.name,
        repos_url: res.repos_url,
        location: res.location
      }
      this.sendProfileData.emit(<ProfileData>this.profileData)
    });
  }
}
