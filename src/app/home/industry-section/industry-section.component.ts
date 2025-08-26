import { Component, Renderer2, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-industry-section',
  templateUrl: './industry-section.component.html',
  styleUrls: ['./industry-section.component.scss']
})
export class IndustrySectionComponent implements AfterViewInit {

  @ViewChildren('zone') zones!: QueryList<ElementRef>;
  activeClass = 'active';
  activeIndex = 0; // Keep track of the active zone index
  mobileView = false; // To check if we're in mobile view

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const zonesArray = this.zones.toArray();

    // Detect if it's mobile view
    if (window.innerWidth <= 768) {
      this.mobileView = true;
      this.startAutoSlide();
    }

    // Add mouseenter and mouseleave listeners to zones (optional)
    zonesArray.forEach((zone, index) => {
      const el = zone.nativeElement;

      this.renderer.listen(el, 'mouseenter', () => {
        this.setActiveZoneByIndex(index);
      });

      this.renderer.listen(el, 'mouseleave', () => {
        this.setActiveZoneByIndex(this.activeIndex);
      });
    });
  }

  private setActiveZoneByIndex(index: number): void {
    const zonesArray = this.zones.toArray();
    zonesArray.forEach((zone, i) => {
      if (i === index) {
        this.renderer.addClass(zone.nativeElement, this.activeClass); // Activate the hovered zone
      } else {
        this.renderer.removeClass(zone.nativeElement, this.activeClass); // Deactivate other zones
      }
    });
  }

  // Logic for auto-sliding on mobile view
  startAutoSlide() {
    setInterval(() => {
      this.nextZone();
    }, 1000); // Change slide every 5 seconds
  }

  // Move to the next zone (service)
  nextZone() {
    const totalZones = this.zones.length;
    this.activeIndex = (this.activeIndex + 1) % totalZones;
    this.setActiveZoneByIndex(this.activeIndex);
  }
}
