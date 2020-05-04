import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mushroom',
  templateUrl: './mushroom.component.html',
  styleUrls: ['./mushroom.component.css']
})
export class MushroomComponent implements OnInit {
  mushroomId = {}
  mushroom: any;
  commentForm;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.commentForm = this.formBuilder.group({
      name: '',
      content: ''
    });
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

  onSubmit(): void {
    if(this.commentForm.valid){
      let data = this.commentForm.value;

      this.http.post<any>(`http://thestaticcow.dk:30031/mushroom/${this.mushroomId}/comment`, data).subscribe(data => {
        console.log(data);
      });
    }
  }
}
