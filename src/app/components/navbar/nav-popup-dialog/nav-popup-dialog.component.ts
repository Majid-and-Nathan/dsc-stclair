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
  ngOnInit(): void {
    this.links = [
      { name: 'HOME', href: '' },
      { name: 'FEATURES', href: '#' },
      { name: 'ABOUT', href: '#' },
      { name: 'CONTACT', href: '/contact-us' },
    ];
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
