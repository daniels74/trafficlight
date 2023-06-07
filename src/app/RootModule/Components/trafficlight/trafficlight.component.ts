import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trafficlight',
  templateUrl: './trafficlight.component.html',
  styleUrls: ['./trafficlight.component.scss']
})
export class TrafficlightComponent {

  @Input() lightColor!: string;
}
