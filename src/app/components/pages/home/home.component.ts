import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/types';
import {CardType } from '../../../enums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  aboutCards: Card[] = [];
  technologiesCards: Card[] = [];

  ngOnInit(): void {

    this.aboutCards.push({
      title: "Concept of DSC",
      description: "The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.",
      icon: "fas fa-graduation-cap",
      colour: "4285F4",
      cardType: CardType.ABOUT
    });
    this.aboutCards.push({
      title: "Why DSC?",
      description: "For students to learn development skills, solve problems through technology and inspire them to be world class developers and changemakers.",
      icon: "fas fa-code",
      colour: "DB4437",
      cardType: CardType.ABOUT
    });
    this.aboutCards.push({
      title: "Target audience",
      description: "DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.",
      icon: "fas fa-users",
      colour: "0F9D58",
      cardType: CardType.ABOUT
    });

    this.technologiesCards.push({
      title: "Angular",
      description: "The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.",
      image: "https://img.icons8.com/material-outlined/48/000000/flutter.png",
      cardType: CardType.TECHNOLOGIES
    });
    this.technologiesCards.push({
      title: "Angular",
      description: "The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.",
      image: "https://img.icons8.com/material-outlined/48/000000/flutter.png",
      cardType: CardType.TECHNOLOGIES
    });
    this.technologiesCards.push({
      title: "Angular",
      description: "The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.",
      image: "https://img.icons8.com/material-outlined/48/000000/flutter.png",
      cardType: CardType.TECHNOLOGIES
    });
  }

}
