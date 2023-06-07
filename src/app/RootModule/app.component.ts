import { Component, OnInit } from '@angular/core';
import { LightService } from '../CoreModules/Services/light.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'trafficlight';

  light! : string;

  constructor(private lightService: LightService) {}
  ngOnInit(): void {
    this.lightService.light$.subscribe((light) => {
      if(light === 'green') {
        this.light = light;
        setTimeout(()=> {
          this.lightService.changeLight("yellow");
        }, 4000);
      }
      else if (light === 'yellow') {
        this.light = light;
        setTimeout(()=> {
          this.lightService.changeLight("red");
        }, 2000);
      }
      else if (light === 'red') {
        this.light = light;
        setTimeout(()=> {
          this.lightService.changeLight("green");
        }, 4000);
      }
    })
  }
}
