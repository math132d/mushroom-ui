import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-genus',
  templateUrl: './genus.component.html',
  styleUrls: ['./genus.component.css']
})
export class GenusComponent implements OnInit {
  genus: String = '';
  mushrooms = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.genus = params.get('genus');
      this.getMushrooms();
    })
  }

  getMushrooms(){
    this.http.get<any>(`http://thestaticcow.dk:30031/genus/${this.genus}`).subscribe(data => {
      this.mushrooms = data;
    })
  }
}
