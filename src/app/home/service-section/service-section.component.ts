import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.scss']
})
export class ServiceSectionComponent implements OnInit, OnDestroy {
  sectionTitle = 'Explore Our';
  sectionSubtitle = 'Full Scope IT Services';
  sectionDescription = 'Whether starting or scaling, our services eliminate every tech barrier and empower your business to succeed digitally.';

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
      img: 'assets/images/4.svg',
      title: 'Security Services',
      description: 'Keep your systems secure with proactive security solutions.'
    },
    {
      img: 'assets/images/5.svg',
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
  slideWidth = 300;

  private autoSlideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }

  scrollSlider(direction: 'left' | 'right') {
    if (direction === 'left') {
      if (this.activeIndex > 0) {
        this.activeIndex -= 1;
      }
    } else {
      if (this.activeIndex < this.services.length - this.visibleCount) {
        this.activeIndex += 1;
      }
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      if (this.activeIndex < this.services.length - this.visibleCount) {
        this.activeIndex++;
      } else {
        this.activeIndex = 0; // reset to start when end is reached
      }
    }, 3000); // every 3 seconds
  }

  get isLeftDisabled() {
    return this.activeIndex === 0;
  }

  get isRightDisabled() {
    return this.activeIndex >= this.services.length - this.visibleCount;
  }
}
