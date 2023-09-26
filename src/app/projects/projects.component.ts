import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  allProjects: any[] = [
    {
      title: 'McGraw Hill',
      icon: '../../assets/images/projects/mcgrawhill-1.png',
      description: 'Designed and developed their Mhplus Dashboard using Angular 13, and Integrated APIs, worked with WCAG 2.0. The website was compatible with screen reader/voice-over/JAWS/NVIDIA and color contracts for special users. Good hands-on managing state of the application using NgRX.',
      techStack: [
        {
          logo: '../../assets/images/projects/angular.png',
          label: 'Angular'
        },
        {
          logo: '../../assets/images/projects/nodejs.png',
          label: 'Node Js'
        },
        {
          logo: '../../assets/images/projects/aws.png',
          label: 'AWS'
        },
        {
          logo: '../../assets/images/projects/javascript.png',
          label: 'JavaScript'
        },
      ]
    },
    {
      title: 'Kaiser Permanente',
      icon: '../../assets/images/projects/kaiser-permanente-1.png',
      description: 'Worked on principles of Scaled Agile Framework SAFe to add features, and enhancements and removed bugs in a complex healthcare system application using the latest front-end technologies. we have worked on the CDIS Application which is the admin-side of KPATHS. Created and maintained fully automated CI/CD pipelines for code deployment using Team City and Jenkins.',
      techStack: [
        {
          logo: '../../assets/images/projects/firebase.png',
          label: 'Firebase'
        },
        {
          logo: '../../assets/images/projects/angular.png',
          label: 'Angular'
        },
        {
          logo: '../../assets/images/projects/aws.png',
          label: 'AWS'
        },
        {
          logo: '../../assets/images/projects/nodejs.png',
          label: 'Node Js'
        },
        {
          logo: '../../assets/images/projects/restapi.png',
          label: 'Rest APIs'
        },
      ]
    },
    {
      title: 'Motive Partners',
      icon: '../../assets/images/projects/motive_partners-1.png',
      description: 'Used Angular 12 following principles of Agile Project Management to build web application for the Single Page Offer (SPO) & Multi Page Offer (MPO) to enhance the business. Developed modern, clean, and complex front ends by using HTML, CSS, and Bootstrap. Created reusable components, Services, and Directives using Angular CLI. Implemented HTTP requests using RxJS Observable library to handle multiple values over time.',
      techStack: [
        {
          logo: '../../assets/images/projects/angular.png',
          label: 'Angular'
        },
        {
          logo: '../../assets/images/projects/aws.png',
          label: 'AWS'
        },
        {
          logo: '../../assets/images/projects/restapi.png',
          label: 'Rest APIs'
        },
        {
          logo: '../../assets/images/projects/javascript.png',
          label: 'JavaScript'
        }
      ]
    },
    {
      title: 'Comcast',
      icon: '../../assets/images/projects/comcast-1.png',
      description: 'Worked on building responsive user interfaces for the reporting application using the latest front-end technologies Angular 13 (Typescript) and Google Material Design Library. Applied form builders, and form groups to create various reactive forms. Developed User-friendly interfaces that interact with a range of backend services including RESTful APIs, Auth0 and Firebase. Gathered requirements and recommend solutions to solve business problems.',
      techStack: [
        {
          logo: '../../assets/images/projects/angular.png',
          label: 'Angular'
        },
        {
          logo: '../../assets/images/projects/sql.png',
          label: 'SQL'
        },
        {
          logo: '../../assets/images/projects/aws.png',
          label: 'AWS'
        },
        {
          logo: '../../assets/images/projects/nodejs.png',
          label: 'Node JS'
        },
        {
          logo: '../../assets/images/projects/restapi.png',
          label: 'Rest APIs'
        }
      ]
    },
    {
      title: 'CVS Aetna',
      icon: '../../assets/images/projects/CVS-and-Aetna-1.png',
      description: 'Worked on this Health Care Project with the latest technologies. Managed to build screen readable content of the web application for the users having some kind of visibility issues, used color combinations easily recognizable to every user of the website. Created reusable components, Services, and Directives, implemented HTTP requests using RxJS Observable library to handle multiple values over time.',
      techStack: [
        {
          logo: '../../assets/images/projects/firebase.png',
          label: 'Firebase'
        },
        {
          logo: '../../assets/images/projects/angular.png',
          label: 'Angular'
        },
        {
          logo: '../../assets/images/projects/aws.png',
          label: 'AWS'
        },
        {
          logo: '../../assets/images/projects/nodejs.png',
          label: 'Node Js'
        },
        {
          logo: '../../assets/images/projects/restapi.png',
          label: 'Rest APIs'
        },
      ]
    },
    {
      title: 'Huntington Bank',
      icon: '../../assets/images/projects/huntington-bank-1.png',
      description: 'Worked on this large-scale and complex Banking Application to add new features, and enhancements and removed bugs using the latest front-end technologies. Created and maintained fully automated CI/CD pipelines for code deployment using Jenkins. Developed modern, clean, and complex front ends by using HTML, CSS, and Bootstrap. Used their in-built library components with strong concepts of NGRx (State Management).',
      techStack: [
        {
          logo: '../../assets/images/projects/angular.png',
          label: 'Angular'
        },
        {
          logo: '../../assets/images/projects/nodejs.png',
          label: 'Node Js'
        },
        {
          logo: '../../assets/images/projects/restapi.png',
          label: 'Restful APIs'
        },
        {
          logo: '../../assets/images/projects/javascript.png',
          label: 'JavaScript'
        },
        {
          logo: '../../assets/images/projects/aws.png',
          label: 'AWS'
        },
      ]
    },
    {
      title: 'Wells Fargo Bank',
      icon: '../../assets/images/projects/Wells_Fargo-1.png',
      description: 'Used the latest Angular and following principles of Agile Project Management to build a web application for the bank to manage their investment plans, accounts information, etc. Created reusable components, services, and directives, and implemented HTTP requests using RxJS Observable library to handle multiple values over time. Developed modern, clean, and complex front ends by using HTML, SCSS, and Bootstrap.',
      techStack: [
        {
          logo: '../../assets/images/projects/angular.png',
          label: 'Angular'
        },
        {
          logo: '../../assets/images/projects/nodejs.png',
          label: 'Node Js'
        },
        {
          logo: '../../assets/images/projects/aws.png',
          label: 'AWS'
        },
        {
          logo: '../../assets/images/projects/javascript.png',
          label: 'JavaScript'
        },
      ]
    },
    {
      title: 'Kemper Insurance',
      icon: '../../assets/images/projects/kemper-1.png',
      description: 'Developed responsive user interfaces for the asset management application using Angular 7 (Typescript) and Google Material Design Library. Gathered requirements and recommend solutions to solve business problems. Applied form builders, and form groups to create various reactive forms. Developed User-friendly interfaces that interact with a range of backend services including RESTful APIs, Auth0 and Firebase.',
      techStack: [
        {
          logo: '../../assets/images/projects/firebase.png',
          label: 'Firebase'
        },
        {
          logo: '../../assets/images/projects/angular.png',
          label: 'Angular'
        },
        {
          logo: '../../assets/images/projects/aws.png',
          label: 'AWS'
        },
        {
          logo: '../../assets/images/projects/nodejs.png',
          label: 'Node Js'
        },
        {
          logo: '../../assets/images/projects/restapi.png',
          label: 'Rest APIs'
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
