import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/types';
import { TeamCard } from 'src/app/types/team-card';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

   @Input() card: TeamCard;
  constructor() { }

  ngOnInit(): void {
  }

}
