import { Component, Input } from '@angular/core';
import { ProfileData } from './ProfileData';
import { HttpClient } from '@angular/common/http';

export type Repos = {
  name: string;
  forks: number;
  language: string;
  watchers: number;
  url: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'github-profiles-angular';

  profileDataLoaded: boolean = false;
  reposDataLoaded: boolean = false;

  profileActive: boolean = false;
  projectsActive: boolean = false;

  profileData: {} = <ProfileData>{};
  reposData: Repos[] = [];

  avatar_url?: string;
  bio?: string;
  blog?: string;
  followers?: number;
  following?: number;
  name?: string;
  login?: string;
  repos_url: string = '';
  location?: string;
  html_url?: string;
  query: string = '';

  private apiUrl = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {}

  getQuery(e: string) {
    this.query = e;
    this.getProfileData();
    this.getReposData();
  }

  getProfileActive(e: boolean) {
    this.profileActive = e;
  }
  getProjectsActive(e: boolean) {
    this.projectsActive = e;
  }

  getProfileData() {
    if (this.query !== '') {
      return this.http.get(this.apiUrl + this.query).subscribe((res: any) => {
        console.log(res);
        this.profileData = <ProfileData>{
          avatar_url: res.avatar_url,
          bio: res.bio,
          blog: res.blog,
          followers: res.followers,
          following: res.following,
          name: res.name,
          login: res.login,
          repos_url: res.repos_url,
          location: res.location,
          html_url: res.html_url
        };
        this.avatar_url = res.avatar_url;
        this.bio = res.bio;
        this.blog = res.blog;
        this.followers = res.followers;
        this.following = res.following;
        this.name = res.name;
        this.login = res.login;
        this.repos_url = res.repos_url;
        this.location = res.location;
        this.html_url = res.html_url

        this.profileDataLoaded = true;
        if (this.profileActive === false && this.projectsActive === false) {
          this.profileActive = true;
        }
      });
    } else return null;
  }

  getReposData() {
    if (this.query !== '') {
      return this.http
        .get(this.apiUrl + this.query + '/repos')
        .subscribe((res: any) => {
          this.reposData = res;
          this.reposDataLoaded = true;
        });
    } else return null;
  }
}
