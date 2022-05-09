import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-buttonbar',
  templateUrl: './buttonbar.component.html',
  styleUrls: ['./buttonbar.component.css'],
})
export class ButtonbarComponent implements OnInit {
  @Output() sendProfileBtnActive: EventEmitter<boolean> = new EventEmitter();
  @Output() sendReposBtnActive: EventEmitter<boolean> = new EventEmitter();
  @Input() profileBtnActive: boolean = false;
  reposBtnActive: boolean = false;
  selector: string = '';
  constructor() {}

  ngOnInit(): void {}

  sendBtnBools() {
    this.sendProfileBtnActive.emit(this.profileBtnActive);
    this.sendReposBtnActive.emit(this.reposBtnActive);
  }

  btnClick(e: any) {
    e.preventDefault();
    this.selector = e.target.value;
    if (this.selector === 'profile') {
      if (this.reposBtnActive === true) {
        this.profileBtnActive = !this.profileBtnActive;
        this.reposBtnActive = !this.reposBtnActive;
        this.sendBtnBools();
      } else {
        this.profileBtnActive = !this.profileBtnActive;
        this.sendBtnBools();
      }
    } else if (this.selector === 'projects') {
      if (this.profileBtnActive === true) {
        this.reposBtnActive = !this.reposBtnActive;
        this.profileBtnActive = !this.profileBtnActive;
        this.sendBtnBools();
      } else {
        this.reposBtnActive = !this.reposBtnActive;
        this.sendBtnBools();
      }
    }
  }
}
