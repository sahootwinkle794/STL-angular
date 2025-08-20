import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



interface ImpactStat {
  count: string;
  label: string;
  gradient: string;
}
@Component({
  selector: 'app-high-impact',
  standalone: false,
  // imports: [CommonModule],
  templateUrl: './high-impact.component.html',
  styleUrl: './high-impact.component.scss'
})
export class HighImpactComponent {

   titlePart1 = 'High-Impact Outcomes';
  titlePart2 = 'That Drive Your Business Growth';

  stats: ImpactStat[] = [
    {
    count: '200+',
    label: 'Successful Projects',
    gradient: 'radial-gradient(circle at 30% 30%, #1abc9c, #016a9f)' // Green Glow
  },
  {
    count: '50+',
    label: 'Clients Served',
    gradient: 'radial-gradient(circle at 30% 30%, #e67e22, #d35400)' // Orange Glow
  },
  {
    count: '14+',
    label: 'Years of Experience',
    gradient: 'radial-gradient(circle at 30% 30%, #3498db, #2c3e50)' // Blue Glow
  }
  ];

}
