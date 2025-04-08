import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  // pure : false
})
export class RemainingPipe implements PipeTransform {

  transform(msg: string, maxChars: number = 100): number {
    console.log('Remaining pipe...')
    return maxChars - msg.length;
  }

}

// pure : trandform() gets invoked only when input/argument changes
// impure : trandform() gets invoked when any data changes in the component