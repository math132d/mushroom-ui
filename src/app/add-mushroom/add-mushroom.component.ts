import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-mushroom',
  templateUrl: './add-mushroom.component.html',
  styleUrls: ['./add-mushroom.component.css']
})
export class AddMushroomComponent {
  mushroomForm;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.mushroomForm = this.formBuilder.group({
      name: '',
      family: '',
      genus: '',
      species: '',
      description: '',
      image: ''
    })
  }

  onSubmit(): void {
    console.log(this.mushroomForm.value);
    this.mushroomForm.reset();
  }

}
