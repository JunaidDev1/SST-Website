import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHelperService {

  ourServices: any[] = [
    {
      title: 'IT Design',
      description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond. Discourse unwilling am no described'
    },
    {
      title: 'Analytic Solutions',
      description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond. Discourse unwilling am no described'
    },
    {
      title: 'Risk Management',
      description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond. Discourse unwilling am no described'
    },
    {
      title: 'Business Planning',
      description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond. Discourse unwilling am no described'
    },
  ];

  ourTeam: any[] = [
    {
      name: 'Muhammad Atif Afaq',
      designation: 'Co-Founder | Senior Software Engineer | Angular | Node JS',
      linkedIn: 'https://www.linkedin.com/in/muhammad-afaq-6b364a48/',
      imageUrl: './assets/images/team/Atif.jpg'
    },
    {
      name: 'Junaid Iqbal',
      designation: 'Co-Founder | Senior Software Engineer | Angular | Ionic | Firebase',
      linkedIn: 'https://www.linkedin.com/in/junaid-iqbal-b240b5158/',
      imageUrl: './assets/images/team/junaid.jpg'
    },
    {
      name: 'Marwa Qureshi',
      designation: 'Software Engineer | IT Consultant | Java',
      linkedIn: 'https://www.linkedin.com/in/marwaq/',
      imageUrl: './assets/images/team/marwa.png'
    }
  ];

  reviews: any[] = [
    {
      reviewerImage: './assets/images/team/omega.png',
      reviewerName: 'Justus Che',
      review: 'Great job, beyond expectation. They did their job right on point. Planning another project with them already.',
      reviewerCompany: 'Omega Soft - USA'
    },
    {
      reviewerImage: './assets/images/team/bilal.png',
      reviewerName: 'Bilal Lagrioui',
      review: 'Great communicators, Excellent in what they do, timely delivery. They are the best developers I have woked with this far.',
      reviewerCompany: 'High Developers - Morocco'
    },
  ];

  constructor() { }

}
