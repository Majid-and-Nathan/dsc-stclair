import { Component } from '@angular/core';
import { RippleGlobalOptions } from '@angular/material/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit() {
    AOS.init();
    if (window.location.hash === '#') {
      window.location.hash = '';
    }
  }
  title = 'angular-boiler-plate';

  temp(): void {
    console.log("Hi");
  }

}
