import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team: any = [
    {
      name: 'Muhammad Atif Afaq',
      designation: 'Co-Founder | Senior Software Engineer | Angular | Node JS',
      linkedIn: 'https://www.linkedin.com/in/muhammad-afaq-6b364a48/',
      imageUrl: './assets/img/team/Atif.jpg'
    },
    {
      name: 'Junaid Iqbal',
      designation: 'Co-Founder | Senior Software Engineer | Angular | Ionic | Firebase',
      linkedIn: 'https://www.linkedin.com/in/junaid-iqbal-b240b5158/',
      imageUrl: './assets/img/team/junaid.jpg'
    },
    {
      name: 'Marwa Qureshi',
      designation: 'Software Engineer | IT Consultant | Java',
      linkedIn: 'https://www.linkedin.com/in/marwaq/',
      imageUrl: './assets/img/team/marwa.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
