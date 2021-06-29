import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  cards: Card[] = [];

  ngOnInit(): void {

    this.cards.push({
      title: "Concept of DSC",
      description: "The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.",
      icon: "fa-graduation-cap",
      colour: "4285F4"
    });
    this.cards.push({
      title: "Why DSC?",
      description: "For students to learn development skills, solve problems through technology and inspire them to be world class developers and changemakers.",
      icon: "fa-code",
      colour: "DB4437"
    });
    this.cards.push({
      title: "Target audience",
      description: "DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.",
      icon: "fa-users",
      colour: "0F9D58"
    });
  }

}
