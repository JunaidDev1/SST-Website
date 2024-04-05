import { Pipe, PipeTransform } from '@angular/core';
import { iProduct } from './shared/product';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(myLocalArray: iProduct[], searchValue: string): iProduct[] {
    if (!myLocalArray || !searchValue) {
      return myLocalArray;
    }
    return myLocalArray.filter((data: any) =>
      data.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.price.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
