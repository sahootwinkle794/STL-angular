import { Component ,ViewChild,ElementRef } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrl: './choose-us.component.scss'
})
export class ChooseUsComponent {
  
//   carouselOptions = {
//   loop: true,
//   margin: 10,
//   nav: true,
//   dots: true,
//   responsive: {
//     '0': { items: 1 },
//     '768': { items: 2 },
//     '992': { items: 3 },
//     '1200': { items: 4 }
//   }
// };

@ViewChild('carousel', { static: false }) carousel!: ElementRef;

  serviceItems = [
    {
      img: 'assets/images/choose-us/01.png',
      alt: 'Curiosity to Innovate',
      title: 'Curiosity to Innovate',
      description: "We’re always exploring new ways to push boundaries and improve."
    },
    {
      img: 'assets/images/choose-us/02.png',
      alt: 'Problem Solvers',
      title: 'Problem Solvers',
      description: 'Challenges excite us, and we never stop until we find solutions.'
    },
    {
      img: 'assets/images/choose-us/03.png',
      alt: 'Driven by Results',
      title: 'Driven by Results',
      description: 'We’re obsessed with delivering outcomes that actually drives trackable results for you.'
    },
    {
      img: 'assets/images/choose-us/04.png',
      alt: 'Industry Specific Experts',
      title: 'Industry Specific Experts',
      description: 'Challenges excite us, and we never stop until we find solutions.'
    },
    // {
    //   img: 'assets/images/choose-us/05.png',
    //   alt: 'Transparent Communication',
    //   title: 'Transparent Communication',
    //   description: 'We believe in open and honest collaboration. From project kick-off to delivery.'
    // },
    {
      img: 'assets/images/choose-us/02.png',
      alt: 'Agility At Core',
      title: 'Agility At Core',
      description: 'We adapt swiftly to change and stay ahead of trends, ensuring your evolving and keeping your business competitive.'
    }
  ];


  currentIndex = 0;
  cardsPerView = 4;

  get visibleItems() {
    const total = this.serviceItems.length;
    let items = [];

    for (let i = 0; i < this.cardsPerView; i++) {
      const index = (this.currentIndex + i) % total;
      items.push(this.serviceItems[index]);
    }

    return items;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.serviceItems.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.serviceItems.length) % this.serviceItems.length;
  }
}
