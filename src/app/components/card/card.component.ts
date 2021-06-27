import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() avatarImage: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() description: string | undefined;
  @Input() cardImage: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
