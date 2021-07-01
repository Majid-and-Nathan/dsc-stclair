import { Component, OnInit } from '@angular/core';
import { Card, Link } from 'src/app/types';
import { ContactUsContent } from 'src/app/types/contact-content';
import { ListCard } from 'src/app/types/list-card';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  content: ContactUsContent;
  socialLinks: Link[];
  cards: ListCard[] = [];
  cardOneArray: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.socialLinks = [
      { name: 'facebook', href: '/' },
      { name: 'discord', href: '/' },
      { name: 'instagram', href: '#' },
      { name: 'linkedin', href: '#' },

    ];
    this.content = {
      title: 'Want to get involved?',
      description:
        'If you\'re interested in joining, partnering, or have a question, contact us with ',
      mapTitle: 'My first AGM project',
      lat: 42.2485,
      long: -83.0203,
      companyEmail: 'hello@hotmail.com',
      companyPhoneNumber: '(519)-214-143',
      cityAndProvince: 'Windsor, ON',
      postalCode: 'N0B 215',
      address: '555 Dougal Ave',
    };
    
    this.cards.push({
      title: "Location",
      icon: "fa-search-location",
      colour: "4285F4",
      listItems: [
        'Windsor, ON',
        '555 Dougal Ave',
        'N0B 215'
        
      ]
   
    
    });

   
    this.cards.push({
      title: "Contact",
      icon: "fa-network-wired",
      colour: "F4B400",

      listItems: [
        'hello@hotmail.com',
        '(519)-214-143',
        'N0B 215'
        
      ]
    
    });
    this.cards.push({
      title: "Contact",
      icon: "fa-network-wired",
      colour: "F4B400",

      listItems: [
        'hello@hotmail.com',
        '(519)-214-143',
        'N0B 215'
        
      ]
    
    });
   

  }
}
