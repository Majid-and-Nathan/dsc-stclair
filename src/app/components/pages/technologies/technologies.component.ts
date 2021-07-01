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
      title: "Angular",
      description: "The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.",
      image: "https://img.icons8.com/material-outlined/48/000000/flutter.png",
      cardType: CardType.TECHNOLOGIES
    });
    this.technologiesCards.push({
      title: "Flutter",
      description: "The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.",
      image: "https://img.icons8.com/material-outlined/48/000000/flutter.png",
      cardType: CardType.TECHNOLOGIES
    });
    this.technologiesCards.push({
      title: "C#/.NET",
      description: "The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.",
      image: "https://img.icons8.com/material-outlined/48/000000/flutter.png",
      cardType: CardType.TECHNOLOGIES
    });
  }

}
