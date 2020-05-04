import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mushroom-list-item',
  templateUrl: './mushroom-list-item.component.html',
  styleUrls: ['./mushroom-list-item.component.css']
})
export class MushroomListItemComponent {
  @Input() mushroom: any;

  constructor(
    private router: Router
  ) { }

  routeTo(): void {
    this.router.navigate(['/mushroom/' + this.mushroom._id]);
  }
}
