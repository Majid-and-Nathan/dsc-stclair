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
      photoUrl: " assets/images/selfies/nathan.png",
      role: "Lead",
      icons: [
        {
          icon: "fab fa-github",
          colour: "d66ba0",
          type: "github",
          href: "https://github.com/romeronathan"
        },
        {
          icon: "fab fa-linkedin",
          colour: "#0077B5",
          type: "linkedin",
          href: "https://www.linkedin.com/in/nathan-romero-1f5" 

        }
      ]},

    );
    this.teamCards.push({
      name: "Omar Yousef",
      role: "Technical Lead",
      photoUrl: " assets/images/selfies/omar.png",
      icons: [
        {
          icon: "fab fa-github",
          colour: "d66ba0",
          type: "github",
          href: "https://github.com/oyousef25"
        },
        {
          icon: "fab fa-linkedin",
          colour: "#0077B5",
          type: "linkedin",
          href: "https://linkedin.com/in/omar-yousef-257305194"
        }
      ]});
    this.teamCards.push({
      name: "Wusiman Yibulayin",
      role: "Technical Lead",
      photoUrl: " assets/images/selfies/wusiman.png",
      icons: [
        {
          icon: "fab fa-linkedin",
          colour: "#0077B5",
          type: "linkedin",
          href: "https://www.linkedin.com/in/wusiman-yibulayin-65811a197"
        }
      ]
    });
    this.teamCards.push({
      name: "Brooke Baird",
      role: "Secretary",
      photoUrl: " assets/images/selfies/brooke.png",
      icons: [
        {
          icon: "fab fa-github",
          colour: "d66ba0",
          type: "github",
          href: "https://github.com/brookebee413"
        },
        {
          icon: "fab fa-linkedin",
          colour: "#0077B5",
          type: "linkedin",
          href: "https://www.linkedin.com/in/brooke-baird-431062195/"
        }
      ]
    });
    this.teamCards.push({
      name: "Jonathan Shemon",
      photoUrl: " assets/images/selfies/jonathan.png",
      role: "Treasurer",
      icons: [
      
      ]
    });
    this.teamCards.push({
      name: "Huzeir Kurpejovic",
      photoUrl: "assets/images/selfies/huzier.png",
      role: "Event Manager",
      icons: [
        {
          icon: "fab fa-github",
          colour: "d66ba0",
          type: "github",
          href: "https://github.com/huzeir2k"
        },
        {
          icon: "fab fa-linkedin",
          colour: "#0077B5",
          type: "linkedin",
          href: "https://www.linkedin.com/in/huzeir-kurpejovic-0ba057192"
        }
      ]
    });
    this.teamCards.push({
      name: "Devon Divinecz",
      photoUrl: "assets/images/selfies/devon.png",
      role: "Relations Director",
      icons: [
        {
          icon: "fab fa-github",
          colour: "d66ba0",
          type: "github",
          href: "https://github.com/DevonDiv"
        },
        {
          icon: "fab fa-linkedin",
          colour: "#0077B5",
          type: "linkedin",
          href: "https://www.linkedin.com/in/devon-divinecz-07097019a"
        }
      ]
    });
    this.teamCards.push({
      name: "Niko Bilicic",
      photoUrl: "assets/images/selfies/niko.png",
      role: "Social Media Coordinator",
      icons: [
      
      ]
    });
    this.teamCards.push({
      name: "Utsav Dave",
      photoUrl: "assets/images/selfies/david.png",
      role: "Software Developer",
      icons: [
        {
          icon: "fab fa-linkedin",
          colour: "#0077B5",
          type: "linkedin",
          href: "https://www.linkedin.com/in/utsavdave97"
        }
      ]

    });
    this.teamCards.push({
      name: "Ryan Murphy",
      photoUrl: "assets/images/selfies/bryan.png",
      role: "Software Developer",
      icons: [
        {
          icon: "fab fa-linkedin",
          colour: "#0077B5",
          type: "linkedin",
          href: "https://www.linkedin.com/in/ryan-murphy-4a5a7a204"
        }
      ]
    });
    this.teamCards.push({
      name: "Josh Iovino",
      photoUrl: "assets/images/selfies/avatar.png",
      role: "Software Developer",
      icons: [
        {
          icon: "fab fa-github",
          colour: "d66ba0",
          type: "github",
          href: "https://github.com/Josh-iovino"
        },
        {
          icon: "fab fa-linkedin",
          colour: "#0077B5",
          type: "linkedin",
          href: "https://www.linkedin.com/in/josh-iovino-a6734120b/ "
        }
      ]
    });
    this.teamCards.push({
      name: "Justin Dunn",
      photoUrl: "assets/images/selfies/justin.png",
      role: "1st Year Rep",
      icons: [
      
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
