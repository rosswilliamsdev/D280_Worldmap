import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WorldBankService {
  private baseURL: string = 'https://api.worldbank.org/v2/country';
  private selectedCountrySubject = new BehaviorSubject<string | null>(null);
  selectedCountry$ = this.selectedCountrySubject.asObservable();

  constructor(private http: HttpClient) {}

  getCountryData(countryCode: string): Observable<any> {
    return this.http.get(`${this.baseURL}/${countryCode}?format=json`).pipe(
      map((response: any) => response[1][0]) // actual data is in the second element
    );
  }

  setSelectedCountry(countryCode: string): void {
    this.selectedCountrySubject.next(countryCode);
  }
}
