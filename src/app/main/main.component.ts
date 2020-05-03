import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  onClick(){
    this.http.get<any>(`http://thestaticcow.dk:30031/mushrooms/random`).subscribe(data => {
      this.router.navigate([`mushroom/${data._id}`]);
    });
  }
}
