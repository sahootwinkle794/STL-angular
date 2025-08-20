import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';





interface WhyInvestCard {
  title: string;
  text: string;
}

@Component({
  selector: 'app-why-invest',
  standalone: false,
  // imports: [CommonModule],
  templateUrl: './why-invest.component.html',
  styleUrl: './why-invest.component.scss'
})
export class WhyInvestComponent {
  mainTitle = 'Why Invest in Consultation Services?';
  subTitle = 'Businesses Are Reaping the Benefits of IT Consultation Services';
  description = `The IT consultation market hit USD 906.47 million, reflecting its critical role in business growth.`;

  whyInvest: WhyInvestCard[] = [
    {
      title: 'Efficient System in Place',
      text: `Get expert advice on optimizing your workflows, automating tasks, and aligning technology with your business needs for greater efficiency.`
    },
    {
      title: 'Save Costs, Reduce Risks',
      text: `Leverage our IT consultation to identify cost-saving opportunities, implement secure systems, and reduce the risk of costly downtime or data breaches.`
    },
    {
      title: 'Expert Insights',
      text: `Access top-tier tech knowledge and adopt cutting-edge solutions without the headache of training a team.`
    }
  ];

}
