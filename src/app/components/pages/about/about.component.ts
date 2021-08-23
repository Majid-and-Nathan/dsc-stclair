import { Component, OnInit } from '@angular/core';
import { CardType } from 'src/app/enums';
import { Card } from 'src/app/types';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutCards: Card[] = [];

  constructor() { }

  ngOnInit(): void {
    this.aboutCards.push({
      title: "Concept of DSC",
      description: "The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.",
      icon: "fas fa-lightbulb",
      colour: "F4B400",
      cardType: CardType.ABOUT
    });
    this.aboutCards.push({
      title: "Software Development",
      description: "Students will become better developers through projects, contests and workshops. There will also be resources for students to better develop their portfolios/resumes.  ",
      icon: "fas fa-code",
      colour: "DB4437",
      cardType: CardType.ABOUT
    });

    this.aboutCards.push({
      title: "Collaboration",
      description: "Members of the club will belong to a community passionate about technology. There will be opportunities for members to work together on projects to strengthen communication and soft-skills.",
      icon: "fas fa-people-carry",
      colour: "0F9D58",
      cardType: CardType.ABOUT
    });
  }

}
