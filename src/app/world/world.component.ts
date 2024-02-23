import { Component } from '@angular/core';
import { WorldBankService } from '../services/world-bank.service'; // Adjust the import path as necessary

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css'],
})
export class WorldComponent {
  constructor(private worldBankService: WorldBankService) {}

  onMapClick(event: MouseEvent): void {
    const element = event.target as SVGElement;
    if (element.tagName === 'path') {
      const countryId = element.id;
      this.worldBankService.setSelectedCountry(countryId);
    }
  }
}
