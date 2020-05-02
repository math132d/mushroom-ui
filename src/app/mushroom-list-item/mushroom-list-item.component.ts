import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mushroom-list-item',
  templateUrl: './mushroom-list-item.component.html',
  styleUrls: ['./mushroom-list-item.component.css']
})
export class MushroomListItemComponent implements OnInit {
  @Input() mushroom: any;

  constructor() { }

  ngOnInit(): void {
  }

}
