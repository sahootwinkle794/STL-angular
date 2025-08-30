import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationServicesComponent } from './consultation-services/consultation-services.component';
import{ RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {



toggleJob(event: Event): void {
  const element = event.currentTarget as HTMLElement | null;
  if (!element) return;
  const faqItem = element.closest('.faq-item') as HTMLElement | null;
  if (!faqItem) return;
  const questionBtn = faqItem.querySelector('.faq-question') as HTMLElement | null;
  if (!questionBtn) return;
  faqItem.classList.toggle('open');

  const icon = questionBtn.querySelector('.icon') as HTMLElement | null;

  if (icon) {
    icon.textContent = faqItem.classList.contains('open') ? '-' : '+';
  } else {

    questionBtn.setAttribute(
      'aria-expanded',
      faqItem.classList.contains('open') ? 'true' : 'false'
    );
  }
}







  
  // services = [
  //   {
  //     img: 'assets/images/website.svg',
  //     title: 'Website development',
  //     description: 'Create fast, responsive websites that hook visitors and push them down the conversion pipeline.'
  //   },
  //   {
  //     img: 'assets/images/application.svg',
  //     title: 'Application Development',
  //     description: 'Build custom applications that automate staff tasks, meet regulatory requirements, and improve service delivery.'
  //   },
  //   {
  //     img: 'assets/images/consultation.svg',
  //     title: 'Consultation and Managed Services',
  //     description: 'Build custom applications that automate staff tasks, meet regulatory requirements, and improve service delivery.'
  //   },
  //   {
  //     img: 'assets/images/data.svg',
  //     title: 'Data And Analytics',
  //     description: 'Turn data into insights to make smarter business decisions.'
  //   }
    
  // services = [
  //   {
  //     img: 'assets/images/services/service-card-1.svg',
  //     title: 'Website Development',
  //     description: 'Create fast, responsive websites that hook visitors and push them down the conversion pipeline.',
  //   },
  //   {
  //     img: 'assets/images/2.svg',
  //     title: 'Application Development',
  //     description: 'Build custom applications that automate staff tasks, meet regulatory requirements, and improve service delivery.'
  //   },
  //   {
  //     img: 'assets/images/3.svg',
  //     title: 'Data and Analytics',
  //     description: 'Turn data into insights to make smarter business decisions.'
  //   },
  //   {
  //     img: 'assets/images/4.svg',
  //     title: 'Security Services',
  //     description: 'Keep your systems secure with proactive security solutions.'
  //   },
  //   {
  //     img: 'assets/images/5.svg',
  //     title: 'Cloud Services',
  //     description: 'Access scalable, reliable cloud solutions for better business agility.'
  //   },
  //   {
  //     img: 'assets/images/6.png',
  //     title: 'Emerging Technologies',
  //     description: 'Implement cutting-edge technologies to drive innovation and growth.'
  //   }
  // ];






   scrollPosition = 0;
cardWidthWithGap = 310 + 30; // card width + gap

ngAfterViewInit() {
  // initialization if needed
}

scrollLeft() {
  const container = document.getElementById('cardsRow');
  if (!container) return;

  this.scrollPosition = Math.max(this.scrollPosition - this.cardWidthWithGap, 0);
  container.style.transform = `translateX(-${this.scrollPosition}px)`;
}

scrollRight() {
  const container = document.getElementById('cardsRow');
  if (!container) return;

  const maxScroll = (this.cardsCount() - 4) * this.cardWidthWithGap; 

  this.scrollPosition = Math.min(this.scrollPosition + this.cardWidthWithGap, maxScroll);
  container.style.transform = `translateX(-${this.scrollPosition}px)`;
}

cardsCount() {
  return 4; 
}



activeIndex = 0;
  get isLeftDisabled() {
    return this.activeIndex === 0;
  }


  // activeIndex = 0;
  // visibleCount = 3;
  // slideWidth = 300;

  // private autoSlideInterval: any;

  // ngOnInit(): void {
  //   this.startAutoSlide();
  // }

  // ngOnDestroy(): void {
  //   clearInterval(this.autoSlideInterval);
  // }

  // scrollSlider(direction: 'left' | 'right') {
  //   if (direction === 'left') {
  //     if (this.activeIndex > 0) {
  //       this.activeIndex -= 1;
  //     }
  //   } else {
  //     if (this.activeIndex < this.services.length - this.visibleCount) {
  //       this.activeIndex += 1;
  //     }
  //   }
  // }

  // startAutoSlide() {
  //   this.autoSlideInterval = setInterval(() => {
  //     if (this.activeIndex < this.services.length - this.visibleCount) {
  //       this.activeIndex++;
  //     } else {
  //       this.activeIndex = 0; // reset to start when end is reached
  //     }
  //   }, 3000); // every 3 seconds
  // }

  // get isLeftDisabled() {
  //   return this.activeIndex === 0;
  // }

  // get isRightDisabled() {
  //   return this.activeIndex >= this.services.length - this.visibleCount;
  // }







// THIS IS FOR READY SECTION







 contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      projectDescription: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Replace with actual API call
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}