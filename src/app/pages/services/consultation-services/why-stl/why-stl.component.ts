import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-why-stl',
  standalone: false,
  // imports: [CommonModule],
  templateUrl: './why-stl.component.html',
  styleUrl: './why-stl.component.scss'
})
export class WhyStlComponent {

  mainTitle = 'Why STL?';

  features: Feature[] = [
    {
      icon: 'Deep.png',
      title: 'Deep Regulatory Knowledge',
      text: `Our team's profound understanding of regulatory requirements ensures your projects are compliant, minimizing risks and avoiding costly delays.`
    },
    {
      icon: 'Deep.png',
      title: 'Improved Efficiency',
      text: `Experience enhanced operational efficiency with our optimized processes and advanced tools, leading to smoother workflows and reduced costs.`
    },
    {
      icon: 'Deep.png',
      title: 'Faster Project Delivery',
      text: `Benefit from our streamlined strategies that accelerate project timelines, deliver results faster, and reduce time to market.`
    },
    {
      icon: 'Deep.png',
      title: 'Tightened Security',
      text: `Trust our robust security measures to protect your data and systems, ensuring a secure environment and safeguarding your assets from potential threats.`
    },
    {
      icon: 'Deep.png',
      title: 'Agile Methodology',
      text: `Our agile approach promotes flexibility and rapid adjustments, keeping your projects aligned with evolving requirements and fostering effective collaboration.`
    },
    {
      icon: 'Deep.png',
      title: 'Quick Onboarding',
      text: `Enjoy a seamless integration with our quick onboarding process, minimizing downtime and ensuring your team is ready to contribute to project success immediately.`
    }
  ];
}
