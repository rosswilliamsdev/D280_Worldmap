import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'D280_Worldmap';
  onCountrySelected(countryId: string): void {
    console.log(`Country selected: ${countryId}`);
    // fetch data related to the selected country or perform other actions.
  }
}
