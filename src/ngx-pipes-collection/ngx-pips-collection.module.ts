import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Camel2WordsPipe} from './pipes/camel-case-split.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Camel2WordsPipe],
  exports: []
})
export class PipesCollectionModule {}