import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../../models/Product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform{
  transform(products , value): Product[] {
    return products.filter(product => {
      return product.id.includes(value);
    });
  }
}
