import { Component, OnInit } from '@angular/core';
import { EventBus } from '../event-bus';

@Component({
  selector: 'app-miraflores',
  template: `<h1>miraflores {{message}}</h1>`
})
export class MirafloresComponent implements OnInit {
  eventBus = EventBus.getInstance();
  message = '';

  ngOnInit() {
    this.eventBus.on('channel', (channel: any) => {
      console.log(1, channel);
      this.message = channel.detail;
    })
  }
}
