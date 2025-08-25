import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

   supportCards = [
    {
      class:'card1',
      icon: 'assets/images/contact-page/icon-1.png',
      title: 'Dedicated Support Team 24/7',
      description: 'Reach out to our support team for any assistance. Our team of well-trained professionals listens to your requirements, provides valuable input, and promptly resolves any issues.',
      button: 'Explore Our Services',
      link: '/services'
    },
    {
      class:'card2',
      icon: 'assets/images/contact-page/icon-2.png',
      title: 'Talk to our business analyst / project manager',
      description: 'Let’s Talk! Your Business Is The Priority. Clear Understanding Of Technology Tailored Guidance Helping Your Growth!',
      button: 'Schedule a Consultation',
      link: '/consultation'
    },
    {
      class:'card3',
      icon: 'assets/images/contact-page/icon-3.png',
      title: 'Careers at STL',
      description: 'Join A Power-Packed Team! Company Shaping The Future Of Technology. Work Culture That Cares. Let’s Talk.',
      button: 'Explore Job Opportunities',
      link: '/careers'
    },
    {
      class:'card-4',
      icon: 'assets/images/contact-page/icon-4.png',
      title: 'General Support',
      description: 'Reach Out Anytime for Any Inquiries. Always Happy To Help!',
      button: 'Contact Us',
      link: '/contact'
    }
  ];
  mapDots = [
  { label: 'USA', class: 'usa' },
  { label: 'Dubai', class: 'dubai' },
  { label: 'India', class: 'india' }
];


}
