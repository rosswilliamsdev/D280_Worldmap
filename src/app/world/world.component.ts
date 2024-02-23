import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrl: './world.component.css',
})
export class WorldComponent {
  @Output() countrySelected = new EventEmitter<string>();

  onMapClick(event: MouseEvent): void {
    // console.log('Map clicked', event.target);
    const element = event.target as SVGElement;
    if (element.tagName === 'path') {
      const countryId = element.id;
      this.countrySelected.emit(countryId);
    }
  }
}
