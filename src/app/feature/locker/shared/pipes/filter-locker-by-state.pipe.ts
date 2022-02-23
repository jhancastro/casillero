import { Pipe, PipeTransform } from '@angular/core';
import { Iocupados } from '../model';

@Pipe({
  name: 'filterLockerByState'
})
export class FilterLockerByStatePipe implements PipeTransform {

  transform(data: Iocupados[], field : string, value : string): any[] {
    if (!data) return [];
    if (!value || value.length == 0) return data;
    return data.filter(key =>
      key[field]
        .toLowerCase()
        .indexOf(value.toLowerCase()) !=-1);
  }

}
