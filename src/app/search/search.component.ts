import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
	@Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
	@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
	searchText: string = '';
	constructor(private fb: FormBuilder,
	private rentalService: RentalService) {}
	ngOnInit(): void {
		this.buildForm();
	}

  buildForm(): void {
		this.form = this.fb.group({
			priceFrom: new FormControl(''),
			priceTo: new FormControl(''),
			sizeFrom: new FormControl(''),
			sizeTo: new FormControl(''),
      roomsFrom: new FormControl(''),
      roomsTo: new FormControl(''),
      bathroomsFrom: new FormControl(''),
      bathroomsTo: new FormControl(''),
      petsAllowed: new FormControl(''),
      smokingAllowed: new FormControl(''),
      laundry: new FormControl(''),
      furnished: new FormControl('')
		});    
  }

  search(filters: any): void {
    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    this.groupFilters.emit(filters);
  }

}
