import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Link } from 'src/app/types';

@Component({
  selector: 'app-nav-popup-dialog',
  templateUrl: './nav-popup-dialog.component.html',
  styleUrls: ['./nav-popup-dialog.component.scss'],
})
export class NavPopupDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<NavPopupDialogComponent>) {}
  links: Link[];
  socialLinks: Link[];
  ngOnInit(): void {
    this.links = [
      { name: 'Home', href: 'about-page' },
      { name: 'Technologies', href: 'tech-page' },
      { name: 'Team', href: 'team-page' },
      { name: 'Contact', href: 'contact-page'},
    ];
    this.socialLinks = [
      { name: 'facebook', href: '/' },
      { name: 'discord', href: '/' },
      { name: 'instagram', href: '#' },
      { name: 'linkedin', href: '#' },

    ];
  }
  closeDialog() {
    this.dialogRef.close();
  }
  goToPage(name: any) {
    this.dialogRef.close();
    var doc = document.getElementById(name);
    if (doc) {
      doc.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
