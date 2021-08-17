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
      photoUrl: "../../../assets/images/selfies/omar.png",
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
      name: "Farzana Mouary",
      photoUrl: "../../../assets/images/selfies/farzana.png",
      role: "Treasurer",
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
      name: "Devon",
      photoUrl: "../../../assets/images/selfies/devon.png",
      role: "Treasurer",
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
      name: "Jonathan Shemon",
      photoUrl: "../../../assets/images/selfies/jonathan.png",
      role: "1st Year Rep",
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
