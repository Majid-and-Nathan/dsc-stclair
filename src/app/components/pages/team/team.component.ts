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
      name: "Sammy Doe",
      photoUrl: "../../../assets/images/angular-logo.png",
      description: "DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.",
      role: "Lead",
      icons: [
        {
          icon: "fab fa-github",
          colour: "d66ba0",
          type: "github"
        },
        {
          icon: "fab fa-linkedin",
          colour: "#0077B5",
          type: "linkedin"
        }
      ]},

    );
    this.teamCards.push({
      name: "Sarah Jane",
      role: "Co-Lead",
      photoUrl: "../../../assets/images/dsc-icon.png",
      description: "DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.",
      icons: [
        {
          icon: "fab fa-github",
          colour: "d66ba0",
          type: "github"
        },
        {
          icon: "fab fa-linkedin",
          colour: "#0077B5",
          type: "linkedin"
        }
      ]});
    this.teamCards.push({
      name: "Adam Doe",
      role: "Project Manager",
      photoUrl: "../../../assets/images/dotnet-logo.png",
      description: "DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.",
      icons: [
        {
          icon: "fab fa-github",
          colour: "d66ba0",
          type: "github"
        },
        {
          icon: "fab fa-linkedin",
          colour: "#0077B5",
          type: "linkedin"
        }
      ]
    });
    this.teamCards.push({
      name: "Peter Jane",
      photoUrl: "../../../assets/images/flutter-logo.png",
      role: "Social Media Coordinateor",
      description: "DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.",
      icons: [
        {
          icon: "fab fa-github",
          colour: "d66ba0",
          type: "github"
        },
        {
          icon: "fab fa-linkedin",
          colour: "#0077B5",
          type: "linkedin"
        }
      ]

    });
    this.teamCards.push({
      name: "James Doe",
      photoUrl: "src\assets\images\left-logo.png",
      role: "Leader",
      description: "DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.",
      icons: [
        {
          icon: "fab fa-github",
          colour: "d66ba0",
          type: "github"
        },
        {
          icon: "fab fa-linkedin",
          colour: "#0077B5",
          type: "linkedin"
        }
      ]
    });
    this.teamCards.push({
      name: "David Jane",
      photoUrl: "src\assets\images\right-logo.png",
      role: "Lead",
      description: "DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.",
      icons: [
        {
          icon: "fab fa-github",
          colour: "d66ba0",
          type: "github"
        },
        {
          icon: "fab fa-linkedin",
          colour: "#0077B5",
          type: "linkedin"
        }
      ]
    });
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3,
  
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2,
        
          

      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1,
 
      }
  ];
  }

}
