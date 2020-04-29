import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mushroom',
  templateUrl: './mushroom.component.html',
  styleUrls: ['./mushroom.component.css']
})
export class MushroomComponent implements OnInit {
  mushroomId = {}

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.mushroomId = params.get('mushroomId');

      //Get information about mushroom using get

    })
  }
}
