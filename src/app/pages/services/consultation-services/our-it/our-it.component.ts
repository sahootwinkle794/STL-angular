import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-it',
  standalone: false,
  // imports: [CommonModule],
  templateUrl: './our-it.component.html',
  styleUrl: './our-it.component.scss'
})
export class OurITComponent {

    mainTitle = 'Our IT Consultation Services';
  subTitle = 'Decode Challenges, Discover Opportunities';
  description = `With 15+ years of experience, we add value to your business by decoding challenges, discovering opportunities, and reimagining strategies for long-term growth and innovation.`;

  services = [
    {
      image: 'IT-Assignment.png',
      title: 'IT Assessments',
      text: `Our team analyzes your current IT environment to identify inefficiencies or vulnerabilities. We check for areas of improvement and prioritize each.`
    },
    {
      image: 'it-strategy.png',
      title: 'IT Strategy & Planning',
      text: `Based on the analysis, we develop strategies and frameworks to align your business goals with the right technology. We create actionable plans for both short-term and long-term objectives.`
    },
    {
      image: 'it-budget.png',
      title: 'IT Budgeting',
      text: `We work with you to develop a realistic IT budget that aligns with your business needs. Our approach ensures cost-effective use of technology for future investments.`
    },
    {
      image: 'risk.png',
      title: 'Security Risk Assessments',
      text: `Our team evaluates your security posture to identify potential risks and vulnerabilities. We provide tailored strategies to strengthen your defenses.`
    }
  ];

}
