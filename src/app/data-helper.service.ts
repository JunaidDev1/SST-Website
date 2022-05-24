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

  allServices: any[] = [
    {
      title: 'Responsive Website Design',
      imageUrl: './assets/images/services/web-design.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      title: 'Android Mobile Apps',
      imageUrl: './assets/images/services/android.jpeg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      title: 'iOS Mobile Apps',
      imageUrl: './assets/images/services/ios.jpeg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      title: 'Cross Platform Apps',
      imageUrl: './assets/images/services/hybrid.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      title: 'UI / UX Development',
      imageUrl: './assets/images/services/uiux.jpeg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      title: 'Admin CMS / Dashboard',
      imageUrl: './assets/images/services/admin.jpeg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      title: 'IT Consulting',
      imageUrl: './assets/images/services/consulting.jpeg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      title: 'Customer Satisfaction',
      imageUrl: './assets/images/services/satisfaction.jpeg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
  ];

  socialLinks: any[] = [
    {
      imageUrl: 'https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_1-facebook-1024.png',
      link: 'https://www.linkedin.com/company/soft-sync-technologies'
    },
    {
      imageUrl: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-1024.png',
      link: 'https://www.linkedin.com/company/soft-sync-technologies'
    },
    {
      imageUrl: 'https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-1024.png',
      link: 'https://www.linkedin.com/company/soft-sync-technologies'
    }
  ];

  constructor() { }

}
