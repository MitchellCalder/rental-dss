import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css'],
  providers: [RentalService]
})
export class RentalDetailsComponent implements OnInit {

  currentRental = null;
  message = '';

  constructor(
    private rentalService: RentalService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getRental(this.route.snapshot.paramMap.get('id'));
  }

  getRental(id): void {
    this.rentalService.get(id)
      .subscribe(
        data => {
          this.currentRental = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      title: this.currentRental.title,
      description: this.currentRental.description,
      published: status
    };

    this.rentalService.update(this.currentRental.id, data)
      .subscribe(
        response => {
          this.currentRental.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateRental(): void {
    this.rentalService.update(this.currentRental.id, this.currentRental)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The rental was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteRental(): void {
    this.rentalService.delete(this.currentRental.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/rentals']);
        },
        error => {
          console.log(error);
        });
  }
}
