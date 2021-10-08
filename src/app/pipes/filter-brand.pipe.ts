import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'filterBrand'
})
export class FilterBrandPipe implements PipeTransform {

  transform(value: Brand[], filterText: string): Brand[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    if (filterText) {
      let filteredBrands = value.filter(b => b.name.toLocaleLowerCase().indexOf(filterText) !== -1);
      return filteredBrands;
    }
    return value;
  }

}
