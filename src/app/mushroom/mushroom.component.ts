import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mushroom',
  templateUrl: './mushroom.component.html',
  styleUrls: ['./mushroom.component.css']
})
export class MushroomComponent implements OnInit {
  mushroomId = {}
  mushroom: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.mushroomId = params.get('mushroomId');
      this.getMushroom()
    })
  }

  getMushroom(){
    this.http.get<any>(`http://thestaticcow.dk:30031/mushroom/${this.mushroomId}`).subscribe(data => {
      this.mushroom = data;
    })
  }
}
