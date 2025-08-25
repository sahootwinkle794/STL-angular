
import { Component } from '@angular/core';
// import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.scss'],
})
export class ServiceSectionComponent {
  sectionTitle = 'Explore Our';
  sectionSubtitle = 'Full Scope IT Services';
  sectionDescription =
  'Whether starting or scaling, our services eliminate every tech barrier and empower your business to succeed digitally.';

  services = [
    {
      img: 'assets/images/1.svg',
      title: 'Website Development',
      description: 'Create fast, responsive websites that hook visitors and push them down the conversion pipeline.',
    },
    {
      img: 'assets/images/2.svg',
      title: 'Application Development',
      description: 'Build custom applications that automate staff tasks, meet regulatory requirements, and improve service delivery.'
    },
    {
      img: 'assets/images/3.svg',
      title: 'Data and Analytics',
      description: 'Turn data into insights to make smarter business decisions.'
    },
    {
      img: 'assets/images/4.png',
      title: 'Security Services',
      description: 'Keep your systems secure with proactive security solutions.'
    },
    {
      img: 'assets/images/5.png',
      title: 'Cloud Services',
      description: 'Access scalable, reliable cloud solutions for better business agility.'
    },
    {
      img: 'assets/images/6.png',
      title: 'Emerging Technologies',
      description: 'Implement cutting-edge technologies to drive innovation and growth.'
    }
  ];

  activeIndex = 0;
  visibleCount = 3;  


  scrollSlider(direction: 'left' | 'right') {
  if (direction === 'left') {
    if (this.activeIndex > 0) {
      this.activeIndex -= 1;
    }
  } else {
    if (this.activeIndex < this.services.length - 3) {
      this.activeIndex += 1;
    }
  }
}

get visibleServices() {
  return this.services.slice(this.activeIndex, this.activeIndex + 3);
}




get isLeftDisabled() {
  return this.activeIndex === 0;
}

get isRightDisabled() {
  return this.activeIndex >= this.services.length - 3;
}


}
















