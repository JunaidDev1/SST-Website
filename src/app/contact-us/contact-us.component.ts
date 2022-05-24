import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  allOptions: string[] = [
    'General', 'Web Development', 'Mobile Development', 'Social media marketing', 'UX/UI Design', 'Quality and assurance'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
