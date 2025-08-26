import { Component } from '@angular/core';
import * as AOS from 'aos' ;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {





  

   supportCards = [
    // {
    //   class:'card1',
    //   icon: 'assets/images/contact-page/icon-1.png',
    //   title: 'Dedicated Support Team 24/7',
    //   description: 'Reach out to our support team for any assistance. Our team of well-trained professionals listens to your requirements, provides valuable input, and promptly resolves any issues.',
    //   button: 'Explore Our Services',
    //   link: '/services',
    //   Color: 'linear-gradient(163.74deg, #CEDFFF 8.39%, #DDC9FF 99.02%)'

    // },
      {
      class: 'card1',
      icon: 'assets/images/contact-page/icon-1.png',
      title: 'Talk to our Sales Team',
      description: 'Get quick responses, clear explanations, and professional guidance to explore our services.',
      button: 'Contact Sales',
      link: '/sales',
      Color: 'linear-gradient(163.74deg, #CEDFFF 8.39%, #DDC9FF 99.02%)',
      buttonColor: '#8f55f2ff'   // border + text color
    },
    {
      class:'card2',
      icon: 'assets/images/contact-page/icon-2.png',
      title: 'Talk to our business analyst / project manager',
      description: 'Let’s Talk! Your Business Is The Priority. Clear Understanding Of Technology Tailored Guidance Helping Your Growth!',
      button: 'Schedule a Consultation',
      link: '/consultation',
      Color:'linear-gradient(163.74deg, #D3E5F3 8.39%, #83DEFF 99.02%)',
      buttonColor:'#6479ffff'

    },
    {
      class:'card3',
      icon: 'assets/images/contact-page/icon-3.png',
      title: 'Careers at STL',
      description: 'Join A Power-Packed Team! Company Shaping The Future Of Technology. Work Culture That Cares. Let’s Talk.',
      button: 'Explore Job Opportunities',
      link: '/careers',
      Color: 'linear-gradient(158.92deg, #FFF0E2 -0.29%, #FFB09C 94.83%)',
      buttonColor:'#fd7c5cff'
    },
    {
      class:'card-4',
      icon: 'assets/images/contact-page/icon-4.png',
      title: 'General Support',
      description: 'Reach Out Anytime for Any Inquiries. Always Happy To Help!',
      button: 'Contact Us',
      link: '/contact',
      Color: 'linear-gradient(158.92deg, #FFF9E9 -0.29%, #FFD997 94.83%)',
      buttonColor:'#efb95cff'
    }
  ];
  mapDots = [
  { label: 'USA', class: 'usa' },
  { label: 'Dubai', class: 'dubai' },
  { label: 'India', class: 'india' }
];


// This code is for the animation of the contact page usign AOS libraby
    ngOnInit() { 
       AOS.init({
        once: false, // animation happens only once
        duration: 1000, // global duration
      });}


}
