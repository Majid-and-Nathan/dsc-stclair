import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { NavPopupDialogComponent } from 'src/app/components/navbar/nav-popup-dialog/nav-popup-dialog.component';
import { Link } from 'src/app/types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean;
  links: Link[];
  socialLinks: Link[];

  constructor(public dialog: NgDialogAnimationService, public router: Router) {}

  ngOnInit(): void {
    this.isCollapsed = false;
    this.links = [
      { name: 'Home', href: '/', color: "#4285F4" },
      { name: 'Team', href: '#', color: "#DB4437" },
      { name: 'About', href: '#', color: "#F4B400" },
      { name: 'Technologies', href: '#', color: "#0F9D58" },
      { name: 'Contact', href: '/contact-us', color: "#4285F4" },
    ];
    this.socialLinks = [
      { name: 'facebook', href: '/' },
      { name: 'Team', href: '/' },
      { name: 'About', href: '#' },
      { name: 'Technologies', href: '#' },

    ];
  }
  openDialog() {
    let dialogRef = this.dialog.open(NavPopupDialogComponent, {
      animation: {
        to: 'aside',
        incomingOptions: {
          keyframeAnimationOptions: { duration: 200 },
        },
        outgoingOptions: {
          keyframeAnimationOptions: { duration: 200 },
        },
      },
      width: '100vw',
      maxWidth: '100vw',
      height: '100vh',
      closeOnNavigation: true,

      maxHeight: '100vh',
      panelClass: 'dialog-container-custom',
      position: { rowEnd: '0' },
    });
  }
}
