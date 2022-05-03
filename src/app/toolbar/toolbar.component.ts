import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})

export class ToolbarComponent implements OnInit {
  @Output() sendQuery: EventEmitter<string> = new EventEmitter();
  query: string = ""
  
  constructor() {}

  ngOnInit(): void {}

  getQuery(event: any) {
    event.preventDefault();
    this.query = event.target[0].value
    
    return this.sendQuery.emit(this.query)
  }
}
