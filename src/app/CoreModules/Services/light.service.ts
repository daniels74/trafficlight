import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LightService {


  private lightSubject$ = new BehaviorSubject<string>("green");
  light$ = this.lightSubject$.asObservable();

  constructor() { }

  changeLight(light : string) {
    this.lightSubject$.next(light);
  }
}
