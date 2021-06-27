import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  title: string;
  credit: string;
  year: string;
  links: Link[];

  constructor() { }

  ngOnInit(): void {
    this.year = (new Date()).getFullYear().toString();
    this.credit = `${this.title} ${this.year}`;
    
    this.links = [
      { name: 'Privacy Notice', href: '#' },
      { name: 'Careers', href: '#' },
    ];
  }

}
