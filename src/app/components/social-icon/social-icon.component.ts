import { Component, Input, OnInit } from '@angular/core';
import { Icon } from 'src/app/types/icon';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss']
})
export class SocialIconComponent implements OnInit {
  @Input() icon: Icon;


  constructor() { }

  ngOnInit(): void {
  }

}
