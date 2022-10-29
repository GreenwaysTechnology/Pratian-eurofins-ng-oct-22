import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalFraction'
})
export class DecimalFractionPipe implements PipeTransform {

  transform(value: number, numberofDigits: number = 1): string {
    //pipe logic
    return value.toFixed(numberofDigits)
  }

}
