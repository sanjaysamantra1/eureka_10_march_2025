//import { ZoomoutDirective } from './zoomout.directive';
import { ElementRef } from '@angular/core';
import { ZoomoutDirective } from './zoomout.directive';

describe('ZoomoutDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new ZoomoutDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
