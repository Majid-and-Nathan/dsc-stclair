import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  credit: string;
  icons: Link[] = [];
  constructor() { }

  ngOnInit(): void {
    this.icons.push({
      name: "fab fa-discord",
      href: "#"
    });
    this.icons.push({
      name: "fab fa-facebook",
      href: "#"
    });

    this.icons.push({
      name: "fab fa-github",
      href: "#"
    });
    this.icons.push({
      name: "fab fa-linkedin",
      href: "#"
    });
    this.icons.push({
      name: "fab fa-instagram",
      href: "#"
    });

    this.credit = `${(new Date()).getFullYear().toString()} | All rights reserved.`;
  }

  navigate(link: string): void {
    console.log(link);
  }
}
