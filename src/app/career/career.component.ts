import { Component } from '@angular/core';
import * as AOS from 'aos' ;

interface Step {
  title: string;
  description: string;
  image: string;
  icon: string;
}

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {




  ngOnInit() { 
    AOS.init({
      once: true, // animation happens only once
      duration: 1000, // global duration
    });}


// private icons: NodeListOf<HTMLDivElement>;

//   constructor() {
//     this.icons = document.querySelectorAll<HTMLDivElement>(".career-card .icon");
//     this.init();
//   }

//   private init(): void {
//     this.icons.forEach((icon) => {
//       icon.onclick = () => this.toggleDesc(icon);
//     });
//   }

//   private toggleDesc(icon: HTMLDivElement): void {
//     icon.classList.toggle("active");

//     const careerCard = icon.closest(".career-card");
//     if (!careerCard) return;

//     const desc = careerCard.nextElementSibling as HTMLElement | null;
//     if (desc && desc.classList.contains("job-desc")) {
//       desc.classList.toggle("open");
//     }
//   }
// toggleJob(element: HTMLElement): void {
//     const card = element.closest('.career-card') as HTMLElement | null;
//     if (!card) return;

//     const icon = element.querySelector('.icon') as HTMLElement | null;
//     if (!icon) return;

//     card.classList.toggle('open');
//     icon.textContent = card.classList.contains('open') ? '-' : '+';
//   }



  toggleJob(event: Event): void {
  const element = event.currentTarget as HTMLElement | null;
  if (!element) return;

  const card = element.closest('.career-card') as HTMLElement | null;
  if (!card) return;

  const icon = element.querySelector('.icon') as HTMLElement | null;
  if (!icon) return;

  card.classList.toggle('open');
  icon.textContent = card.classList.contains('open') ? '-' : '+';
}



steps: Step[] = [
    {
      title: 'HR Interaction',
      description: 'First of all, the candidate should interact with HR as we are always on the hunt for people who are proactive, self-motivated and constantly willing to upgrade their learning curve.',
      image: 'assets/images/hr_interaction.jpg',
      icon: 'assets/images/HR-Interaction.png'
    },
    {
      title: 'Technical Interview',
      description: 'In this round, candidates are assessed on their technical skills, coding standards, and problem-solving ability.',
      image: 'assets/images/technical-interview.jpg',
      icon: 'assets/images/Technical-Interview.png'
    },
    {
      title: 'Practical Assessment',
      description: 'Candidates are tested with real-world coding tasks and assignments to check their practical application of knowledge.',
      image: 'assets/images/practical-assesment.jpg',
      icon: 'assets/images/Practical-Assessment.png'
    },
    {
      title: 'Final Round',
      description: 'The final interaction round with leadership to evaluate culture fit and overall readiness for the role.',
      image: 'assets/images/final-round.jpg',
      icon: 'assets/images/Final-Round.png'
    }
  ];

  selectedStepIndex: number = 0;

  selectStep(index: number): void {
    this.selectedStepIndex = index;
  }

}
