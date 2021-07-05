import { Component, OnInit } from '@angular/core';
import { TeamCard } from 'src/app/types/team-card';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
 teamCards: TeamCard[] = [];
 responsiveOptions: any;

  constructor() { }

  ngOnInit(): void {
    
    this.teamCards.push({
      name: "Sammy",
      photoUrl: "../../../assets/images/angular-logo.png",
      description: "DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.",
      icon: "fas fa-users",

    });
    this.teamCards.push({
      name: "Sarah",
      photoUrl: "../../../assets/images/dsc-icon.png",
      description: "DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.",
      icon: "fas fa-users",

    });
    this.teamCards.push({
      name: "Adam",
      photoUrl: "../../../assets/images/dotnet-logo.png",
      description: "DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.",
      icon: "fas fa-users",

    });
    this.teamCards.push({
      name: "Peter",
      photoUrl: "../../../assets/images/flutter-logo.png",
      description: "DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.",
      icon: "fas fa-users",

    });
    this.teamCards.push({
      name: "James",
      photoUrl: "src\assets\images\left-logo.png",
      description: "DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.",
      icon: "fas fa-users",

    });
    this.teamCards.push({
      name: "David",
      photoUrl: "src\assets\images\right-logo.png",
      description: "DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.",
      icon: "fas fa-users",

    });
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

}
