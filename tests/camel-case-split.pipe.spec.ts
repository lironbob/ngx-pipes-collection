import {Camel2WordsPipe} from '../src/ngx-pipes-collection/pipes/camel-case-split.pipe';

describe('camel2words', () => {
  let pipe: Camel2WordsPipe;

  beforeEach(() => {
    pipe = new Camel2WordsPipe();
  });

  it('transforms "helloWorld" to "hello world"', () => {
    const value: string = 'helloWorld';
    expect(pipe.transform(value)).toEqual('hello world')
  });

});