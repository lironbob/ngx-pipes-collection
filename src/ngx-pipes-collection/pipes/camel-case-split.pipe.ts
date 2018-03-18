import { Pipe, PipeTransform } from '@angular/core';
import * as splitCC from 'split-camelcase';

@Pipe({
 name: 'camel2words'
})

export class Camel2WordsPipe implements PipeTransform {
 transform(value: string, ...args: any[]): string {
  return splitCC(value).join(' ').toLowerCase();
 }
}