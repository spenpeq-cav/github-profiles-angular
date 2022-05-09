import { Component, OnInit, Input } from '@angular/core';
import { ProfileData } from '../ProfileData';
import { Repos } from '../app.component';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css'],
})
export class InfoboxComponent implements OnInit {
  @Input() profileData: {} = <ProfileData>{};
  @Input() reposData: Repos[] = [];
  @Input() profileDataLoaded: boolean = false;
  @Input() reposDataLoaded: boolean = false;

  @Input() avatar_url?: string;
  @Input() bio?: string;
  @Input() blog?: string;
  @Input() followers?: number;
  @Input() following?: number;
  @Input() name?: string;
  @Input() login?: string;
  @Input() repos_url: string = '';
  @Input() location?: string;
  @Input() html_url?: string;

  @Input() profileActive: boolean = false;
  @Input() projectsActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
