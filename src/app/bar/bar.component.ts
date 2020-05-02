import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  search: String = '';
  inFocus: Boolean = false;
  suggestions: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onChange(search: String): void {
    this.search = search;
    this.getSuggestions();
  }

  onFocusChange(val: Boolean) {
    if(val) {
      this.inFocus = val;
    }else{
      window.setTimeout(() => {
        this.inFocus = val;
      }, 100);
    }
  }

  getSuggestions(){
    this.http.get<any>(`http://thestaticcow.dk:30031/search/${this.search}`).subscribe(data => {
      this.suggestions = data;
    })
  }
}
