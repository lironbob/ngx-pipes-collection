import {CamelWordsPipe} from '../src/ngx-pipes-collection/pipes/camel-words.pipe';

describe('Pipe: camel2words', () => {
  let pipe: CamelWordsPipe;

  beforeEach(() => {
    pipe = new CamelWordsPipe();
  });

  it('should transforms "helloWorld" to "hello world"', () => {
    const value: string = 'helloWorld';
    expect(pipe.transform(value)).toEqual('hello world')
  });

});