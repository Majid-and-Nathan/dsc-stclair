import { Component, OnInit } from '@angular/core';
import { TeamCard } from 'src/app/types/team-card';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
 teamCards: TeamCard[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
