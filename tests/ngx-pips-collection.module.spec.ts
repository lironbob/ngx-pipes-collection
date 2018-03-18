import {TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {PipesCollectionModule} from '../src/ngx-pipes-collection/index';

@Component({
  template: `
      <div></div>`
})
class TestDummyComponent {

}

describe('Module: PipesCollection', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PipesCollectionModule]
    });
  });

  it(`should load the module`, () => {
    expect(TestBed).toBeTruthy();
  });
});
