import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  private apiUrl = 'https://api.github.com/users/spenpeq';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getData(event: any) {
    event.preventDefault();
    return this.http.get(this.apiUrl).subscribe((response) => {
      console.log(response);
    });
  }
}
