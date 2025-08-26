// import { Component,} from '@angular/core';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as AOS from 'aos' ;


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {











// this is the story section \\

  
  // animated = false; // ensure animation runs only once

  // ngOnInit() {}

  // ngAfterViewInit() {
  //   const observer = new IntersectionObserver(entries => {
  //     if (entries[0].isIntersecting && !this.animated) {
  //       this.animated = true;
  //       this.animateStats();
  //     }
  //   }, { threshold: 0.3 }); // trigger when 30% of section visible

  //   observer.observe(this.storysection.nativeElement);
  // }




 activeIndex = 0;
  visibleCount = 3; 

    scrollSlider(direction: 'left' | 'right') {
  if (direction === 'left') {
    if (this.activeIndex > 0) {
      this.activeIndex -= 1;
    }
  } 
}


get isLeftDisabled() {
  return this.activeIndex === 0;
}

get isRightDisabled() {
  return this.activeIndex === 0;
}




   allCards = [
    {
      year: '2016',
      text: 'Opened 3 new offices and two R&D centers and strengthened our global presence.',
      color: 'blue'
    },
    {
      year: '2014',
      text: 'Founded with a mission to deliver innovative IT solutions and drive business success.',
      color: 'green'
    },
    {
      year: '2022',
      text: 'Reached a milestone—50th client served, continuing our commitment to excellence and growth.',
      color: 'orange'
    },
    {
      year: '2023',
      text: 'Expanded to new markets in Europe, focusing on AI-driven automation.',
      color: 'blue'
    },
    {
      year: '2024',
      text: 'Expanded to new markets in Europe, focusing on AI-driven automation.',
      color: 'blue'
    },
    {
      year: '2025',
      text: 'Expanded to new markets in Europe, focusing on AI-driven automation.',
      color: 'blue'
    },
    {
      year: '2026',
      text: 'Expanded to new markets in Europe, focusing on AI-driven automation.',
      color: 'blue'
    }
  ];

  currentIndex = 0;

  get visibleCards() {
    return this.allCards.slice(this.currentIndex, this.currentIndex + 3);
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.allCards.length - 3) {
      this.currentIndex++;
    }
  }
  ngOnInit1() {
  setInterval(() => {
    if (this.currentIndex < this.allCards.length - 3) {
      this.next();
    } else {
      this.currentIndex = 0; // reset to start (circle loop)
    }
  }, 3000); // 3 seconds
}

 
    descrptionbelief1:string='We are committed to delivering exceptional digital solutions that drive success. Every software solution we work on is thoughtfully designed, cleanly coded,';
    descrptionbelief2:string='and rigorously tested across all devices for best industry practices.';

   beliefItems = [
    {
      image: 'assets/images/about-page/bro2.png',
      title: 'CORE PRINCIPLES',
      description: 'Our team is dedicated to "Delivering Excellence" for our clients, and everything else falls into place!',

      list: [
        'Timely Quality Delivery',
        'Honesty & Transparency',
        'Embracing Continuous Innovation'
      ],
      linkText: 'Read more >>'
    },
    {
      image: 'assets/images/about-page/bro.png',
      title: 'OUR VISION',
      description: 'To become the most trusted, agile, and customer-focused technology partner, shaping the future with cutting-edge solutions that drive progress and success.'
    },
    {
      image: 'assets/images/about-page/amico.png',
      title: 'OUR MISSION',
      description: 'To solve every technical challenge of businesses with innovative, goal-driven, sustainable solutions.'
    }
  ];
  testimonials = [
    {
      name: 'Prasanna Kumar Panda',
      subtitle: 'lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur. Porttitor sed aliquam habitasse consectetur molestie nisl netus vitae.',
      rating: 5,
      image: 'assets/images/about-page/t-1.png'
    },
    {
      name: 'Prasanna Kumar Panda',
      subtitle: 'Prasanna Kumar Panda',
      description: 'Lorem ipsum dolor sit amet consectetur. Porttitor sed aliquam habitasse consectetur molestie nisl netus vitae.',
      rating: 5,
      image: 'assets/images/about-page/t-1.png'
    },
    {
      name: 'Prasanna Kumar Panda',
      subtitle: 'Prasanna Kumar Panda',
      description: 'Lorem ipsum dolor sit amet consectetur. Porttitor sed aliquam habitasse consectetur molestie nisl netus vitae.',
      rating: 5,
      image: 'assets/images/about-page/t-1.png'
    },
    {
      name: 'Prasanna Kumar Panda',
      subtitle: 'Prasanna Kumar Panda',
      description: 'Lorem ipsum dolor sit amet consectetur. Porttitor sed aliquam habitasse consectetur molestie nisl netus vitae.',
      rating: 5,
      image: 'assets/images/about-page/t-1.png'
    }
  ];
  teamRoles = [
    {
      title: 'Back-end Developers',
      description: 'Focus on server-side logic, databases, system architecture, and performance, ensuring scalability and security.',
      image: 'assets/images/about-page/dv-1.png',
      color: '#5811AF'
    },
    {
      title: 'Software Developers',
      description: 'Develop user-friendly and visually engaging interfaces for apps and websites, ensuring smooth cross-platform functionality.',
      image: 'assets/images/about-page/dv-1.png',
      color: '#5811AF'
    },
    {
      title: 'Project Managers/ Product Owners',
      description: 'Lead the entire development process, making sure projects are completed successfully and on schedule.',
      image: 'assets/images/about-page/3rd-png.png',
      color: '#5811AF'
    },
    {
      title: 'Business Analysts',
      description: 'Offer valuable insights from data analysis to enhance both business and development processes.',
      image: 'assets/images/about-page/4th.png',
      color: '#5811AF'
    }
  ];
   
    
   workOptions = [
    {
      title: 'Staff Augmentation',
      description: 'Expand your in-house capabilities by adding our experienced developers and project managers to your team.',
      image: 'assets/images/about-page/cuate.png',
      color: '#00A1E4'
    },
    {
      title: 'Consultation Teams',
      description: 'Our experts provide strategic guidance and technical solutions tailored to your business needs.',
      image: 'assets/images/about-page/flex-2.png',
      color: '#00A1E4'
    },
    {
      title: 'Managed Services',
      description: 'We handle the full development process, ensuring smooth, end-to-end project delivery and ongoing support.',
      image: 'assets/images/about-page/pana.png',
      color: '#00A1E4'
    }
  ];
   socialLinks = [
    { icon: 'fa-brands fa-linkedin-in', link: '/linkedin' },
  ];
  leaders = [
    {
      name: 'Sameer Rath',
      position: 'Director, STL',
      image: 'assets/images/about-page/Rectangle 1589.png',
      linkedin: '/linkedin',
        },
    {
      name: 'Suresh Nayak',
      position: 'Director, STL',
      image: 'assets/images/about-page/Rectangle 1589.png',
      linkedin: 'https://www.linkedin.com/in/suresh-nayak'
    },
    {
      name: 'Saswati Mishra',
      position: 'Director, STL',
      image: 'assets/images/about-page/Rectangle 1589.png',
      linkedin: 'https://www.linkedin.com/in/saswati-mishra'
    },
    {
      name: 'Srinivas Eranki',
      position: 'Director, STL',
      image: 'assets/images/about-page/Rectangle 1589.png',
      linkedin: 'https://www.linkedin.com/in/srinivas-eranki'
    }
  ];

allClients = [
    { logo: 'assets/images/about-page/cl-1.png' },
    { logo: 'assets/images/about-page/cl-2.png' },
    { logo: 'assets/images/about-page/cl-3.png' },
    { logo: 'assets/images/about-page/cl-4.png' },
    { logo: 'assets/images/about-page/cl-1.png' },
    { logo: 'assets/images/about-page/cl-2.png' },
    { logo: 'assets/images/about-page/cl-3.png' },
    { logo: 'assets/images/about-page/cl-4.png' },
    { logo: 'assets/images/about-page/cl-2.png' },
    { logo: 'assets/images/about-page/cl-2.png' },
    { logo: 'assets/images/about-page/cl-3.png' },
    { logo: 'assets/images/about-page/cl-4.png' },
    { logo: 'assets/images/about-page/cl-1.png' },
    { logo: 'assets/images/about-page/cl-2.png' },
    { logo: 'assets/images/about-page/cl-3.png' },
    { logo: 'assets/images/about-page/cl-4.png' },
  ];

  currentIndex1= 0;

  get visibleClients() {
    return this.allClients.slice(this.currentIndex1, this.currentIndex1 + 8); // 8 = 2 rows x 4 cols
  }

  next1() {
    if (this.currentIndex1 + 8 < this.allClients.length) {
      this.currentIndex1 += 4;
    }
  }

  prev1() {
    if (this.currentIndex1 > 0) {
      this.currentIndex1 -= 4;
    }
  }
  stats = [
    { icon: 'assets/images/about-page/arrow.png', value: '15+', label: 'Years of Experience', current: 0 },
    { icon: 'assets/images/about-page/arrow.png', value: '25,000+', label: 'Hours Worked', current: 0 },
    { icon: 'assets/images/about-page/arrow.png', value: '500+', label: 'Global Clients', current: 0 },
    { icon: 'assets/images/about-page/arrow.png', value: '300+', label: 'Successful Projects', current: 0 },
  ];

  @ViewChild('statsSection') statsSection!: ElementRef;
  // @ViewChild('storysection') storysection!: ElementRef;
  
  animated = false; // ensure animation runs only once


  
//  this code is trying animation AOS
  ngOnInit() { 
     AOS.init({
      once: false, // animation happens only once
      duration: 1000, // global duration
    });}





  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !this.animated) {
        this.animated = true;
        this.animateStats();
      }
    }, { threshold: 0.3 }); // trigger when 30% of section visible

    observer.observe(this.statsSection.nativeElement);





    // code for trying new animation on AOS 



  //   ngOnInit() {
  //   AOS.init({
  //     once: true, // animation happens only once
  //     duration: 1000, // global duration
  //   });
  // }


    // // for story section 
    // const observer1 = new IntersectionObserver(entries => {
    //   if (entries[0].isIntersecting && !this.animated) {
    //     this.animated = true;
    //     // this.animateStats();
    //   }
    // }, { threshold: 1 }); // trigger when 30% of section visible

    // observer1.observe(this.storysection.nativeElement);
  }

  animateStats() {
    this.stats.forEach(stat => {
      const finalValue = parseInt(stat.value.replace(/[,+]/g, '')); // extract number
      const duration = 2000; // 5 seconds
      const steps = 60; // smoother animation
      const increment = finalValue / steps;
      let current = 0;
      let count = 0;

      const interval = setInterval(() => {
        current += increment;
        stat.current = Math.floor(current);
        count++;

        if (count >= steps) {
          stat.current = finalValue; // set final value
          clearInterval(interval);
        }
      }, duration / steps);
    });
  }


}
