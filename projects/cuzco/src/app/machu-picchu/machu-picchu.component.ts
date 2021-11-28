import { Component } from '@angular/core';
import { EventBus } from '../event-bus';

@Component({
  selector: 'app-machu-picchu',
  template: `
  <h1>Machu picchu</h1>
  <button (click)="emit()">emit</button>
  `
})
export class MachuPicchuComponent {
  eventBus = EventBus.getInstance();

  emit() {
    this.eventBus.emit('channel', 'machu-picchu');
  }
}
