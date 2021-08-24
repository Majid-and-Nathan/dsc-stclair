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
      title: "Flutter",
      description: "We use Flutter for our mobile applications. To learn more about Flutter, check out the docs ",
      href: "https://flutter.dev/docs",
      cardType: CardType.TECHNOLOGIES
    });
    this.technologiesCards.push({
      title: "Angular",
      description: "For our web applications, we use Angular. If  you'd like to learn more about Angular, check out the docs ",
      href: "https://angular.io/docs",
      cardType: CardType.TECHNOLOGIES
    });
    this.technologiesCards.push({
      title: ".NET Core",
      href: "https://docs.microsoft.com/en-us/dotnet/?WT.mc_id=dotnet-35129-website",
      description: "For our backend, we use .NET. To learn more about .NET, you can find the docs ",
      cardType: CardType.TECHNOLOGIES
    });
  }

}
