import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'filterColor'
})
export class FilterColorPipe implements PipeTransform {

  transform(value: Color[], filterText: string): Color[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    if (filterText) {
      let filteredColors = value.filter(b => b.name.toLocaleLowerCase().indexOf(filterText) !== -1);
      return filteredColors;
    }
    return value;
  }

}
