import { Pipe, PipeTransform } from '@angular/core';
import { ItipoCasilleros } from '../model';

@Pipe({
  name: 'filterLockerByType'
})
export class FilterLockerByTypePipe implements PipeTransform {

  transform(data: ItipoCasilleros[], field : string, value : string): any[] {
    if (!data) return [];
    if (!value || value.length == 0) return data;
    return data.filter(key =>
      key[field]
        .toLowerCase()
        .indexOf(value.toLowerCase()) !=-1);
  }

}
