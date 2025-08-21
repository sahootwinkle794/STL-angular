import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.scss'],
})
export class ServiceSectionComponent implements OnInit {
  sectionTitle = 'Explore Our';
  sectionSubtitle = 'Full Scope IT Services';
  sectionDescription =
    'Whether starting or scaling, our services eliminate every tech barrier and empower your business to succeed digitally.';

  services = [
    {
      img: 'assets/images/1.svg',
      title: 'Website Development',
      description:
        'Create fast, responsive websites that hook visitors and push them down the conversion pipeline.',
    },
    {
      img: 'assets/images/2.svg',
      title: 'Application Development',
      description:
        'Build custom applications that automate staff tasks, meet regulatory requirements, and improve service delivery.',
    },
    {
      img: 'assets/images/3.svg',
      title: 'Data and Analytics',
      description: 'Turn data into insights to make smarter business decisions.',
    },
    {
      img: 'assets/images/4.png',
      title: 'Security Services',
      description: 'Keep your systems secure with proactive security solutions.',
    },
    {
      img: 'assets/images/5.png',
      title: 'Cloud Services',
      description: 'Access scalable, reliable cloud solutions for better business agility.',
    },
    {
      img: 'assets/images/6.png',
      title: 'Emerging Technologies',
      description: 'Implement cutting-edge technologies to drive innovation and growth.',
    },
  ];

  activeIndex = 0;
  visibleCount = 3; // default to desktop view

  ngOnInit() {
    this.updateVisibleCount();
  }

  // Listen for window resize to adjust visibleCount dynamically
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateVisibleCount();
  }

  updateVisibleCount() {
    const width = window.innerWidth;
    if (width <= 700) {
      this.visibleCount = 1; // mobile
    } else {
      this.visibleCount = 3; // desktop
    }

    // Adjust activeIndex if out of range after visibleCount change
    if (this.activeIndex > this.services.length - this.visibleCount) {
      this.activeIndex = Math.max(0, this.services.length - this.visibleCount);
    }
  }

  scrollSlider(direction: 'left' | 'right') {
    if (direction === 'left') {
      if (this.activeIndex > 0) {
        this.activeIndex--;
      }
    } else {
      if (this.activeIndex < this.services.length - this.visibleCount) {
        this.activeIndex++;
      }
    }
  }

  get visibleServices() {
    return this.services.slice(this.activeIndex, this.activeIndex + this.visibleCount);
  }

  get isLeftDisabled() {
    return this.activeIndex === 0;
  }

  get isRightDisabled() {
    return this.activeIndex >= this.services.length - this.visibleCount;
  }
}
