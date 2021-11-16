import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/rentals';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  setGroupFilter$ = new Subject<any>();
	getGroupFilter = this.setGroupFilter$.asObservable();

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }

  findByFilters(minPrice, maxPrice, minSize, maxSize,
                   minRooms, maxRooms, minBathrooms, maxBathrooms,
                   petsAllowed, smokingAllowed, furnished, laundry,
                   preferencePrice, preferenceSize, preferenceRooms, preferenceBathrooms,
                   preferencePets, preferenceSmoking, preferenceFurnished, preferenceLaundry): Observable<any> {

    var query = ``;
    minPrice = minPrice != null ? minPrice : 0;
    maxPrice = maxPrice != null ? maxPrice : Number.MAX_SAFE_INTEGER;
    minSize = minSize != null ? minSize : 0;
    maxSize = maxSize != null ? maxSize : Number.MAX_SAFE_INTEGER;
    minRooms = minRooms != null ? minRooms : 0;
    maxRooms = maxRooms != null ? maxRooms : Number.MAX_SAFE_INTEGER;
    minBathrooms = minBathrooms != null ? minBathrooms : 0;
    maxBathrooms = maxBathrooms != null ? maxBathrooms : Number.MAX_SAFE_INTEGER;

    query += `?minPrice=${minPrice}
&maxPrice=${maxPrice}
&minSize=${minSize}
&maxSize=${maxSize}
&minRooms=${minRooms}
&maxRooms=${maxRooms}
&minBathrooms=${minBathrooms}
&maxBathrooms=${maxBathrooms}
&petsAllowed=${petsAllowed}
&smokingAllowed=${smokingAllowed}
&furnished=${furnished}
&laundry=${laundry}`;

var indifferent = -1;

  if (preferencePrice != null) query+=`&preferencePrice=${preferencePrice}`;
  else query+=`&preferencePrice=${indifferent}`;
  if (preferenceSize != null) query+=`&preferenceSize=${preferenceSize}`;
  else query+=`&preferenceSize=${indifferent}`;
  if (preferenceRooms != null) query+=`&preferenceRooms=${preferenceRooms}`;
  else query+=`&preferenceRooms=${indifferent}`;
  if (preferenceBathrooms != null) query+=`&preferenceBathrooms=${preferenceBathrooms}`;
  else query+=`&preferenceBathrooms=${indifferent}`;
  if (preferencePets != null) query+=`&preferencePets=${preferencePets}`;
  else query+=`&preferencePets=${indifferent}`;
  if (preferenceSmoking != null) query+=`&preferenceSmoking=${preferenceSmoking}`;
  else query+=`&preferenceSmoking=${indifferent}`;
  if (preferenceFurnished != null) query+=`&preferenceFurnished=${preferenceFurnished}`;
  else query+=`&preferenceFurnished=${indifferent}`;
  if (preferenceLaundry != null) query+=`&preferenceLaundry=${preferenceLaundry}`;
  else query+=`&preferenceLaundry=${indifferent}`;
  
    return this.http.get(`${baseUrl}${query}`);
  }

  fetchRentals(): Observable<any> {
		return (this.http.get(baseUrl));
	}
}
