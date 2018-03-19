import { Pipe, PipeTransform } from '@angular/core';
import * as splitCC from 'split-camelcase';

@Pipe({
 name: 'camelWords'
})

export class CamelWordsPipe implements PipeTransform {
 transform(value: string): string {
  return new splitCC(value).join(' ').toLowerCase();
 }
}