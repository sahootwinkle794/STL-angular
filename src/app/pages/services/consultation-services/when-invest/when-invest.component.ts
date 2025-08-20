import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface InvestCard {
  title: string;
  subtitle: string;
  points: string[];
  buttonText: string;
  background: string; // background color
}

@Component({
  selector: 'app-when-invest',
  standalone: false,
  // imports: [CommonModule],
  templateUrl: './when-invest.component.html',
  styleUrl: './when-invest.component.scss'
})
export class WhenInvestComponent {


   cards: InvestCard[] = [
    {
      title: 'When Should You Invest in IT Consulting Services?',
      subtitle: 'Our experts can help you if',
      points: [
        'Your business is growing fast and needs IT optimization.',
        'You’re facing frequent tech issues that are affecting operations.',
        'Your IT team lacks skills for complex technologies and new implementations.',
        'You want to streamline workflows with custom software solutions.',
        'You’re planning a digital transformation and need a strategy.'
      ],
      buttonText: 'Our Business Needs IT Consulting Services',
      background: '#F3FAFF' // light blue background
    },
    {
      title: 'When Should You Invest in Managed Services?',
      subtitle: 'Our experts can help you if',
      points: [
        'Your IT team is overwhelmed and can’t focus on core projects.',
        'You need 24/7 monitoring to minimize downtime and resolve issues faster.',
        'You’re struggling with regular security updates and compliance.',
        'You lack resources for an in-house IT department but need reliable management.',
        'You want predictable IT costs and fewer unexpected challenges.'
      ],
      buttonText: 'Our Business Needs Managed Services',
      background: '#E8F7FF' // slightly different blue
    }
  ];

}
