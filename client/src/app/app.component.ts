import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  users : any;

  constructor(private http : HttpClient) {}

  ngOnInit(): void {
    console.log('ngOnInit called');

    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => { console.log('oops I crapped'); console.log(error);},
      complete : () => console.log('fux yeah it works!!')
    });

    console.log('ng on init finished!');
  }
}
