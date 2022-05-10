import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  reviews: any = [
    {
      reviewerImage: './assets/img/feedback/omega.png',
      reviewerName: 'Justus Che',
      review: 'Great job, beyond expectation. They did their job right on point. Planning another project with them already.',
      reviewerCompany: 'Omega Soft - USA'
    },
    {
      reviewerImage: './assets/img/feedback/bilal.png',
      reviewerName: 'Bilal Lagrioui',
      review: 'Great communicators, Excellent in what they do, timely delivery. They are the best developers I have woked with this far.',
      reviewerCompany: 'High Developers - Morocco'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
