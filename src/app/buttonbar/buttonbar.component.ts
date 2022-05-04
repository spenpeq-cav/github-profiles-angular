import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttonbar',
  templateUrl: './buttonbar.component.html',
  styleUrls: ['./buttonbar.component.css'],
})
export class ButtonbarComponent implements OnInit {
  profileBtnActive: boolean = false;
  reposBtnActive: boolean = false;
  selector: string = '';
  constructor() {}

  ngOnInit(): void {}

  btnClick(e: any) {
    e.preventDefault();
    this.selector = e.target.value;
    if (this.selector === 'profile') {
      if (this.reposBtnActive === true) {
        this.profileBtnActive = !this.profileBtnActive;
        this.reposBtnActive = !this.reposBtnActive;
      } else {
        this.profileBtnActive = !this.profileBtnActive;
      }
    } else if (this.selector === 'projects') {
      if (this.profileBtnActive === true) {
        this.reposBtnActive = !this.reposBtnActive;
        this.profileBtnActive = !this.profileBtnActive;
      } else {
        this.reposBtnActive = !this.reposBtnActive;
      }
    }
  }
}
