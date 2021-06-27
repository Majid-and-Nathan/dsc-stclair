import { Component, OnInit } from '@angular/core';
import { CarouselContent } from 'src/app/types';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  contents: CarouselContent[] = [];

  constructor() { }

  ngOnInit(): void {
    this.contents.push(
      {
        image: "https://picsum.photos/id/984/1300/500",
        title: "THIS IS THE TITLE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit.",
        buttonString: "CONTACT US",
        buttonHandler: this.navigateToContactPage
      }
    );
    this.contents.push(
      {
        image: "https://picsum.photos/id/984/1300/500",
        title: "THIS IS THE TITLE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit.",
        buttonString: "CONTACT US",
        buttonHandler: this.navigateToContactPage
      }
    );
    this.contents.push(
      {
        image: "https://picsum.photos/id/984/1300/500",
        title: "THIS IS THE TITLE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit.",
        buttonString: "CONTACT US",
        buttonHandler: this.navigateToContactPage
      }
    );
  }

  navigateToContactPage(): void {
    console.log('NAVIGATING');
  }

}
