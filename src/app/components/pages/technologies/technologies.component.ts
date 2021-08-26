import { Component, OnInit } from '@angular/core';
import { CardType } from 'src/app/enums';
import { Card } from 'src/app/types';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  
  technologiesCards: Card[] = [];

  constructor() { }

  ngOnInit(): void {
    this.technologiesCards.push({
      title: "Web Development",
      description: "Students will get the opportunity to attend workshops or work on projects related to web development. They will learn about creating user friendly interfaces to help with portfolio and project development.",
      cardType: CardType.TECHNOLOGIES
    });
    this.technologiesCards.push({
      title: "Mobile Application Development",
      description: "Learn about developing mobile applications from the ground up. Resources will be provided for students to enhance their mobile application development skills.",
      cardType: CardType.TECHNOLOGIES
    });
    this.technologiesCards.push({
      title: "Backend Development",
      description: "Gain knowledge on the server side of an application. Learn about communicating between an application, server, and a database.",
      cardType: CardType.TECHNOLOGIES
    });
  }

}
