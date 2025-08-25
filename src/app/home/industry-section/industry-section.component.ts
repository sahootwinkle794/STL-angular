import { Component,  Renderer2, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';


@Component({
  selector: 'app-industry-section',
  templateUrl: './industry-section.component.html',
  styleUrl: './industry-section.component.scss'
})
export class IndustrySectionComponent  {









  // try logic

@ViewChildren('zone') zones!: QueryList<ElementRef>;



  defaultZoneClass = 'education'; // The default active zone
  activeClass = 'active';

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const zonesArray = this.zones.toArray();

    // Set default active zone (Education)
    this.setActiveZoneByClass(this.defaultZoneClass);

    // Add mouseenter and mouseleave listeners to zones
    zonesArray.forEach(zone => {
      const el = zone.nativeElement;

      this.renderer.listen(el, 'mouseenter', () => {
        // Remove active from all
        zonesArray.forEach(z => this.renderer.removeClass(z.nativeElement, this.activeClass));
        // Add active to hovered zone
        this.renderer.addClass(el, this.activeClass);
      });

      this.renderer.listen(el, 'mouseleave', () => {
        // Remove active from all
        zonesArray.forEach(z => this.renderer.removeClass(z.nativeElement, this.activeClass));
        // Re-add active to default zone
        this.setActiveZoneByClass(this.defaultZoneClass);
      });
    });
  }

  private setActiveZoneByClass(zoneClass: string) {
    const zonesArray = this.zones.toArray();
    zonesArray.forEach(zone => {
      if (zone.nativeElement.classList.contains(zoneClass)) {
        this.renderer.addClass(zone.nativeElement, this.activeClass);
      } else {
        this.renderer.removeClass(zone.nativeElement, this.activeClass);
      }
    });
  }


}