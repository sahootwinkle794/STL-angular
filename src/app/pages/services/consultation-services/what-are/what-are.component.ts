import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-what-are',
  standalone: false,
  // imports: [CommonModule],
  templateUrl: './what-are.component.html',
  styleUrl: './what-are.component.scss'
})
export class WhatAreComponent {

  // Header Titles
  mainTitle = 'Okay...';
  strongTitle1 = 'What are Consultation and';
  strongTitle2 = 'Managed Services?';

  // Subtitles
  subTitles = [
    'Consultation vs. Managed Services: Make The Right Choice',
    'Consultation vs. Managed Services: The Difference'
  ];

  // Paragraphs
  paragraphs = [
    `Consulting and managed services are different approaches to supporting your business's tech requirements.`,
    `Consulting focuses on providing expert advice, strategies, and fresh insights to optimize your systems without handling the day-to-day tasks required to implement those strategies.`,
    `Managed services, on the other hand, focus on taking over the day-to-day operations of your systems. We advise and execute. It's like having an in-house team but with better expertise and less overhead.`
  ];

  // Image Path
  imagePath = 'assets/images/what-are.jpg';
}
