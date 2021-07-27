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
      name: "Nathan Romero",
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
      name: "Omar Yousef",
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
      name: "Wusiman Yibulayin",
      role: "Technical Lead",
      photoUrl: "../../../assets/images/selfies/wusiman.png",
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
      name: "Brooke Baird",
      role: "Secretary",
      photoUrl: "../../../assets/images/selfies/brooke.png",
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
      name: "Utsav Dave",
      photoUrl: "../../../assets/images/selfies/david.png",
      role: "Software Developer",
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
      name: "Ryan Murphy",
      photoUrl: "../../../assets/images/selfies/bryan.png",
      role: "Software Developer",
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
