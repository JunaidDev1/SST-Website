import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHelperService {

  displayLoading: boolean;

  ourServices: any[] = [
    {
      title: 'IT Design',
      description: 'At Soft Sync Technologies, we believe that design is at the heart of every great software product. Our team of talented designers meticulously crafts visually stunning and intuitive interfaces that captivate users and enhance their overall experience. From sleek and modern aesthetics to seamless user interactions, our design approach is driven by both aesthetics and functionality.'
    },
    {
      title: 'Analytic Solutions',
      description: 'We understand the importance of data-driven decision-making in todays competitive landscape. Our analytics solutions are designed to help you harness the full potential of your data, enabling you to uncover patterns, trends, and opportunities that can propel your business forward. Our Analytic Solution offerings include: Data Analytics and Business Intelligence.'
    },
    {
      title: 'Risk Management',
      description: 'We specialize in comprehensive risk management solutions tailored to your unique needs. Our approach includes identifying, assessing, and mitigating risks through proactive strategies and advanced analytics. With our expertise, you can anticipate potential threats, make informed decisions, and protect your assets. Our risk management solutions encompass compliance, cybersecurity, financial analysis, and operational resilience.'
    },
    {
      title: 'Business Planning',
      description: 'Business planning is a fundamental process that lays the foundation for success. We understand the significance of a well-crafted business plan in achieving your goals. Our experts collaborate with you to develop comprehensive business plans that encompass market analysis, competitive insights, financial projections, and growth strategies. With clarify your vision, set achievable objectives, and outline the roadmap to reach them.'
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
      imageUrl: './assets/images/team/junaid.png'
    },
    {
      name: 'Muhammad Awais',
      designation: 'Software Engineer | Angular | Firebase | WordPress',
      linkedIn: 'https://www.linkedin.com/in/realmawais/',
      imageUrl: './assets/images/team/Awais.png'
    },
    {
      name: 'Umair Ejaz',
      designation: 'Software Engineer | Angular | Firebase',
      linkedIn: 'https://www.linkedin.com/in/umair-ejaz-597a151a2/',
      imageUrl: './assets/images/team/Umair.jpg'
    },
    {
      name: 'Haseeb Ikram',
      designation: 'IT Analyst | Project Management',
      linkedIn: 'https://www.linkedin.com/in/haseebikram',
      imageUrl: './assets/images/team/haseeb.jpeg'
    },
    {
      name: 'Marwa Qureshi',
      designation: 'Associate Software Engineer | IT Consultant | Java',
      linkedIn: 'https://www.linkedin.com/in/marwaq/',
      imageUrl: './assets/images/team/marwa.png'
    },
    {
      name: 'Hamza Rehman',
      designation: 'Software Engineer | Angular | Node JS | Mongo DB | WordPress',
      linkedIn: 'https://www.linkedin.com/in/hamza-rehman033',
      imageUrl: './assets/images/team/hamza.jpg'
    },
    {
      name: 'Maham Qureshi',
      designation: 'HR Generalist | Technical Recruiter | Payroll Manager',
      linkedIn: 'https://www.linkedin.com/in/maham-qureshi-5a6b56163/',
      imageUrl: './assets/images/team/maham.JPG'
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
      description: 'We create websites that seamlessly adapt to various screen sizes and devices, ensuring an optimal user experience for your visitors, whether they are browsing on desktops, tablets, or smartphones.'
    },
    {
      title: 'Android Mobile Apps',
      imageUrl: './assets/images/services/android.jpeg',
      description: 'Our Android app development expertise extends to integrating your app with various APIs, third-party services, and backend systems. Whether its social media integration, payment gateway integration, or connectivity with enterprise solutions, we ensure seamless connectivity and functionality.'
    },
    {
      title: 'iOS Mobile Apps',
      imageUrl: './assets/images/services/ios.jpeg',
      description: 'We understand that every business has unique requirements. Our iOS app development process begins with a thorough understanding of your goals, target audience, and brand identity. This allows us to create tailor-made solutions that align with your vision and deliver exceptional user experiences.'
    },
    {
      title: 'Cross Platform Apps',
      imageUrl: './assets/images/services/hybrid.png',
      description: 'Our talented designers combine aesthetics and functionality to create visually captivating websites that align with your brands visual identity. From color schemes to typography, we pay attention to every detail to create a cohesive and responsive design for all platforms.'
    },
    {
      title: 'UI / UX Development',
      imageUrl: './assets/images/services/uiux.jpeg',
      description: 'We focus on creating intuitive and user-friendly interfaces to enhance the overall user experience. Our UX design approach ensures that visitors can effortlessly navigate through your website, increasing engagement and conversions.'
    },
    {
      title: 'Admin CMS / Dashboard',
      imageUrl: './assets/images/services/admin.jpeg',
      description: 'We specialize in integrating robust CMS platforms, such as WordPress empowering you to easily manage and update your websites content without any technical expertise.'
    },
    {
      title: 'IT Consulting',
      imageUrl: './assets/images/services/consulting.jpeg',
      description: 'Our services extend beyond the initial design and development phase. We offer comprehensive website/ application maintenance and support packages to ensure your web application remains secure, up-to-date, and optimized for performance.'
    },
    {
      title: 'Customer Satisfaction',
      imageUrl: './assets/images/services/satisfaction.jpeg',
      description: 'Whether you are a small business seeking a professional website or a large enterprise looking to revamp your online presence, Team Soft Sync Tech is committed to delivering exceptional IT services that drive results.'
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
