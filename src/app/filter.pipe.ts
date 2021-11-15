import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(rentals: any[], value: string, prop: string): any[] {
		if (!rentals) return [];
		if (!value) return rentals;
		return rentals.filter(singleItem =>
		singleItem[prop].toLowerCase().startsWith(value.toLowerCase())
		);
  }
}
