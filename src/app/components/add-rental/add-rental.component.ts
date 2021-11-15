import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-add-rental',
  templateUrl: './add-rental.component.html',
  styleUrls: ['./add-rental.component.css'],
  providers: [RentalService]
})
export class AddRentalComponent implements OnInit {
  rental = {
    title: '',
    description: '',
    price: 0,
    size: 0,
    rooms: 0,
    bathrooms: 0,
    petsAllowed: false,
    smokingAllowed: false,
    furnished: false,
    laundry: false
  };
  submitted = false;

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
  }

  saveRental(): void {
    const data = {
      title: this.rental.title,
      description: this.rental.description,    
      price: this.rental.price,
      size: this.rental.size,
      rooms: this.rental.rooms,
      bathrooms: this.rental.bathrooms,
      petsAllowed: this.rental.petsAllowed,
      smokingAllowed: this.rental.smokingAllowed,
      furnished: this.rental.furnished,
      laundry: this.rental.laundry
    };

    this.rentalService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newRental(): void {
    this.submitted = false;
    this.rental = {
      title: '',
      description: '',
      price: 0,
      size: 0,
      rooms: 0,
      bathrooms: 0,
      petsAllowed: false,
      smokingAllowed: false,
      furnished: false,
      laundry: false
    };
  }

}
