import { Component, OnInit } from '@angular/core';
import { WorldBankService } from '../services/world-bank.service';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css'],
})
export class FactsComponent implements OnInit {
  countryData: any;

  constructor(private worldBankService: WorldBankService) {}

  ngOnInit(): void {
    // Example: Fetch data for Australia
    this.getCountryData('AU');
  }

  getCountryData(countryCode: string): void {
    this.worldBankService.getCountryData(countryCode).subscribe(
      (data) => {
        this.countryData = data;
        console.log(this.countryData); // For debugging
      },
      (error) => console.error('There was an error!', error)
    );
  }
}
