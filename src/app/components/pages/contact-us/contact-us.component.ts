import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/types';
import { ContactUsContent } from 'src/app/types/contact-content';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  content: ContactUsContent;
  socialLinks: Link[];
  constructor() {}

  ngOnInit(): void {
    this.socialLinks = [
      { name: 'facebook', href: '/' },
      { name: 'discord', href: '/' },
      { name: 'instagram', href: '#' },
      { name: 'linkedin', href: '#' },

    ];
    this.content = {
      title: 'Contact Us',
      description:
        'Itaque suscipit dolorem libero ipsum harum? Dignissimos dolor soluta nemo',
      mapTitle: 'My first AGM project',
      lat: 42.2485,
      long: -83.0203,
      companyEmail: 'hello@hotmail.com',
      companyPhoneNumber: '(519)-214-143',
      cityAndProvince: 'Windsor, ON',
      postalCode: 'N0B 215',
      address: '555 Dougal Ave',
    };
  }
}
