import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomout]',
  standalone: true
})
export class ZoomoutDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.transform = 'scale(1.5)';
    this.el.nativeElement.style.transition = 'transform 0.3s';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
  }
}

