import { Component, OnInit } from '@angular/core';
import { ContactUsContent } from 'src/app/types/contact-content';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  content: ContactUsContent;
  constructor() {}

  ngOnInit(): void {
    this.content = {
      title: 'Contact Us',
      description:
        'Itaque suscipit dolorem libero ipsum harum? Dignissimos dolor soluta nemo',
      mapTitle: 'My first AGM project',
      lat: 51.678418,
      long: 7.809007,
      companyEmail: 'hello@hotmail.com',
      companyPhoneNumber: '(519)-214-143',
      cityAndProvince: 'Windsor, ON',
      postalCode: 'N0B 215',
      address: '555 Dougal Ave',
    };
  }
}
