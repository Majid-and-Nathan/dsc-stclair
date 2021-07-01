import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],

})
export class ListCardComponent implements OnInit {
  @Input() title: string;
  @Input() listItems: string[];
  @Input() icon: string;
  @Input() colour: string;
  constructor() { }

  ngOnInit(): void {
  }

}
