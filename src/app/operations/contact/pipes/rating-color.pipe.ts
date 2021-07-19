import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingColor'
})
export class RatingColorPipe implements PipeTransform {

  transform(value: number): string {
    switch (true) {
      case value < 25:
        return 'red';
      case value < 50:
        return 'orange';
      case value < 75:
        return 'purple';
      default:
        return 'blue';
    }
  }

}
