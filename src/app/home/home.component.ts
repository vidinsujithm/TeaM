import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Service, Employee, State } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Service]
})
export class HomeComponent {

  dataSource: Employee[];
  states: State[];
  events: Array<string> = [];

  constructor(service: Service) {
      this.dataSource = service.getEmployees();
      this.states = service.getStates();
  }
  
  logEvent(eventName) {
      this.events.unshift(eventName);
  }

  clearEvents() {
      this.events = [];
  }

}
