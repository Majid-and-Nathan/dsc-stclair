import { Component } from '@angular/core';
import { RippleGlobalOptions } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-boiler-plate';

  temp(): void {
    console.log("Hi");
  }

}
