import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() colour: string;
  @Input() type: string;
  @Input() isDisabled: string = "false";
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
