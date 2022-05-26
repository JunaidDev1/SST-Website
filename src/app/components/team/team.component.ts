import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input() member: any = {};
  @Input() index: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

}