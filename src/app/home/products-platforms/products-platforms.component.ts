// import { Component } from '@angular/core';
// // import { AfterViewInit, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';
// import {
//   AfterViewInit,
//   ElementRef,
//   QueryList,
//   Renderer2,
//   ViewChildren
// } from '@angular/core';

// @Component({
//   selector: 'app-products-platforms',
//   templateUrl: './products-platforms.component.html',
//   styleUrl: './products-platforms.component.scss'
// })
// export class ProductsPlatformsComponent {


  
//   sectionTitleKey = 'Products and Platforms';
//   sectionSubtitleKey = 'Products and platforms';
//   sectionHeadlineKey = 'Key Stakeholders, One Solution';
//   sectionDescriptionKey =
//     'Our unified products, solutions, and platform help businesses to satisfy every stakeholder of their business from customers, employees, to partners, and create an exceptional experience for them.';

//   products = [
//     {
//       title: 'e-Bhawan',
//       description: 'Streamlines guest house operations, from reservations to billing and staff management.',
//       bgImage: 'assets/images/product-platform.png',
//       mainImage: 'assets/images/system.png'
//     },
//     {
//       title: 'Teziv',
//       description: 'An all-in-one hotel booking and billing platform that simplifies room allocation and services.',
//       bgImage: 'assets/images/product-platform.png',
//       mainImage: 'assets/images/system.png'
//     },
//     {
//       title: 'e-Office',
//       description: 'Automates file movement, HR management, budgeting, and resource booking within departments.',
//       bgImage: 'assets/images/product-platform.png',
//       mainImage: 'assets/images/system.png'
//     },
//     {
//       title: 'e-Counselling',
//       description: 'Simplifies student admissions—from registration and seat allocation to merit lists and counseling.',
//       bgImage: 'assets/images/product-platform.png',
//       mainImage: 'assets/images/system.png'
//     },
//     {
//       title: 'ORIS',
//       description: 'Automates the recruitment process, from job postings to candidate selection and result publishing.',
//       bgImage: 'assets/images/product-platform.png',
//       mainImage: 'assets/images/system.png'
//     },
//     {
//       title: 'Grievance Management',
//       description: 'Allows citizens to submit, track, and resolve grievances with real-time updates.',
//       bgImage: 'assets/images/product-platform.png',
//       mainImage: 'assets/images/system.png'
//     },
//     // {
//     //   title: 'Document Management System',
//     //   description: 'Securely stores, organizes, and retrieves documents,improving access and collaboration.',
//     //   bgImage: 'assets/images/product-platform.png',
//     //   mainImage: 'assets/images/system.png'
//     // }
//   ];

// //  WORKING SECTION 
//   currentIndex = 0;

// next() {
//   if (this.currentIndex < this.products.length - 1) {
//     this.currentIndex++;
//   }
// }

// prev() {
//   if (this.currentIndex > 0) {
//     this.currentIndex--;
//   }
// }

// // TESTING SECTION


// autoScrollInterval: any;
// isHovered = false;

// ngOnInit() {
//   this.startAutoScroll();
// }

// startAutoScroll() {
//   this.autoScrollInterval = setInterval(() => {
//     if (!this.isHovered && this.products.length > 0) {
//       this.currentIndex = (this.currentIndex + 1) % this.products.length;
//     }
//   }, 3000); // Change 3000 to adjust scroll speed (ms)
// }

// stopAutoScroll() {
//   if (this.autoScrollInterval) {
//     clearInterval(this.autoScrollInterval);
//   }
// }

// // Optional: stop scrolling when component is destroyed
// ngOnDestroy() {
//   this.stopAutoScroll();
// }



// // testign new section
// constructor(private renderer: Renderer2) {}

// @ViewChildren('scrollAnimate', { read: ElementRef }) scrollElements!: QueryList<ElementRef>;

// ngAfterViewInit() {
//   const observer = new IntersectionObserver(
//     entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           this.renderer.addClass(entry.target, 'in-view');
//           observer.unobserve(entry.target); // Only once
//         }
//       });
//     },
//     {
//       threshold: 0.15
//     }
//   );

//   this.scrollElements.forEach(el => {
//     observer.observe(el.nativeElement);
//   });
// }
// }


















import {
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
  AfterViewInit,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-products-platforms',
  templateUrl: './products-platforms.component.html',
  styleUrl: './products-platforms.component.scss',
})
export class ProductsPlatformsComponent implements OnInit, AfterViewInit, OnDestroy {
  sectionTitleKey = 'Products and Platforms';
  sectionSubtitleKey = 'Products and platforms';
  sectionHeadlineKey = 'Key Stakeholders, One Solution';
  sectionDescriptionKey =
    'Our unified products, solutions, and platform help businesses to satisfy every stakeholder of their business from customers, employees, to partners, and create an exceptional experience for them.';

  products = [
    {
      title: 'e-Bhawan',
      description: 'Streamlines guest house operations, from reservations to billing and staff management.',
      bgImage: 'assets/images/product-platform.png',
      mainImage: 'assets/images/system.png',
    },
    {
      title: 'Teziv',
      description: 'An all-in-one hotel booking and billing platform that simplifies room allocation and services.',
      bgImage: 'assets/images/product-platform.png',
      mainImage: 'assets/images/system.png',
    },
    {
      title: 'e-Office',
      description: 'Automates file movement, HR management, budgeting, and resource booking within departments.',
      bgImage: 'assets/images/product-platform.png',
      mainImage: 'assets/images/system.png',
    },
    {
      title: 'e-Counselling',
      description: 'Simplifies student admissions—from registration and seat allocation to merit lists and counseling.',
      bgImage: 'assets/images/product-platform.png',
      mainImage: 'assets/images/system.png',
    },
    {
      title: 'ORIS',
      description: 'Automates the recruitment process, from job postings to candidate selection and result publishing.',
      bgImage: 'assets/images/product-platform.png',
      mainImage: 'assets/images/system.png',
    },
    {
      title: 'Grievance Management',
      description: 'Allows citizens to submit, track, and resolve grievances with real-time updates.',
      bgImage: 'assets/images/product-platform.png',
      mainImage: 'assets/images/system.png',
    },
  ];

  currentIndex = 0;
  isHovered = false;
  autoScrollInterval: any;

  @ViewChildren('scrollAnimate', { read: ElementRef }) scrollElements!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.startAutoScroll();
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'in-view');
            observer.unobserve(entry.target); // Observe once
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    this.scrollElements.forEach((el) => {
      observer.observe(el.nativeElement);
    });
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  // Auto-sliding logic
  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      if (!this.isHovered && this.products.length > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.products.length;
      }
    }, 3000); // Adjust speed here (milliseconds)
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  // User clicks previous
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  // User clicks next
  next() {
    if (this.currentIndex < this.products.length - 1) {
      this.currentIndex++;
    }
  }
}
