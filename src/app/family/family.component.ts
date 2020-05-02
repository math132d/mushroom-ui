import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  family: String = '';
  mushrooms = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.family = params.get('family');
      this.getMushrooms();
    })
  }

  getMushrooms(){
    this.http.get<any>(`http://thestaticcow.dk:30031/family/${this.family}`).subscribe(data => {
      this.mushrooms = data;
    })
  }
}
