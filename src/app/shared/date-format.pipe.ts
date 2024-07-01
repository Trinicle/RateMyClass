import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string) {
    const date = new Date(value);
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
    const formattedDate = date.toLocaleDateString('en-US', options);

    const day = date.getDate();
    let daySuffix;
    if (day > 3 && day < 21) {
      daySuffix = 'th';
    } else {
      switch (day % 10) {
        case 1: daySuffix = 'st'; break;
        case 2: daySuffix = 'nd'; break;
        case 3: daySuffix = 'rd'; break;
        default: daySuffix = 'th'; break;
      }
    }

    const dayWithSuffix = day + daySuffix;
    const formattedDateWithSuffix = formattedDate.replace(`${day}`, dayWithSuffix);

    return formattedDateWithSuffix;
  }
}
