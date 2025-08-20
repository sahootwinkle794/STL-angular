import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
videoSources = [
    { src: 'assets/images/staffAugmentation.mp4', type: 'video/mp4' },
    { src: 'assets/images/staffAugmentation.ogg', type: 'video/ogg' }
  ];

  tickerItems = [
    'We Build User-centric, Responsive Websites',
    'We Develop Custom Applications',
    'We Provide Scalable Cloud Solutions',
    'We Turn Data Into Actionable Business Insights',
    'We Secure Your Business with Next Gen DevSecOps services',
    'We Drive Innovation with Emerging Technologies'
  ];

  buttons = [
    { text: 'View Our Services', link: '#', icon: 'fa-solid fa-arrow-right', class: 'btn-1' },
    { text: 'Check Our Case Studies', link: '#', icon: 'fa-solid fa-arrow-right', class: 'btn-2' }
  ];


  subtitles: string[] = [
    "We Build User-centric, Responsive Websites",
    "We Develop Custom Applications",
    "We Provide Scalable Cloud Solutions",
    "We Turn Data Into Actionable Business Insights",
    "We Secure Your Business with Next Gen DevSecOps Services",
    "We Drive Innovation with Emerging Technologies"
  ];

  //test


  // currentIndex = 0;

  // get transformStyle(): string {
  //   return `translateY(-${this.currentIndex * 48}px)`; // Same as height in SCSS
  // }

  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.currentIndex = (this.currentIndex + 1) % this.subtitles.length;
  //   }, 3000); // Change every 3 seconds
  // }



  currentIndex = 0;
transformStyle = 'translateY(0)';

ngOnInit() {
  setInterval(() => {
    // Adjust height for mobile vs desktop
    const itemHeight = window.innerWidth <= 700 ? 32 : 48;

    this.currentIndex = (this.currentIndex + 1) % this.tickerItems.length;
    this.transformStyle = `translateY(-${this.currentIndex * itemHeight}px)`;
  }, window.innerWidth <= 700 ? 3000 : 2000); 
  // 3000ms on mobile (slower), 2000ms for desktop
}



}
