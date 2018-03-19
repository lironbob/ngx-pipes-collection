import {Pipe, PipeTransform} from '@angular/core';
import {toCase} from './to-case.type';
import * as to from 'to-case';

@Pipe({
  name: 'toCase'
})
export class ToCasePipe implements PipeTransform {
  transform(value: string, type: toCase): string {
    if (type === 'kebab') {
      type = 'slug';
    }
    return to[type](value);

  }
}