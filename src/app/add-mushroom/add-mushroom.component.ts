import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-add-mushroom',
  templateUrl: './add-mushroom.component.html',
  styleUrls: ['./add-mushroom.component.css']
})
export class AddMushroomComponent {
  mushroomForm;
  submitted: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.mushroomForm = this.formBuilder.group({
      name: '',
      family: '',
      genus: '',
      edible: '',
      species: '',
      description: '',
      image: ''
    })
  }

  onSubmit(): void {
    let formData = this.mushroomForm.value;

    let data = {
      name: formData.name,
      classification: {
        family: formData.family,
        genus: formData.genus,
        species: formData.species
      },
      edible: Boolean(formData.edible),
      poisonous: Boolean(formData.poisonous),
      description: formData.description,
      images: [
        formData.image
      ]
    }

    if(this.mushroomForm.valid){
      this.http.post<any>(`http://thestaticcow.dk:30031/mushroom`, data).subscribe(data => {
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
