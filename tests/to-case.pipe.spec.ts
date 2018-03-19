import {ToCasePipe} from '../src/ngx-pipes-collection/pipes/to-case.pipe';

describe('Pipe: toCase', () => {
  let pipe: ToCasePipe;

  beforeEach(() => {
    pipe = new ToCasePipe();
  });

  it('Constant: should transforms "helloWorld" to "HELLO_WORLD"', () => {
    const value: string = 'helloWorld';
    expect(pipe.transform(value, 'constant')).toEqual('HELLO_WORLD');
  });

  it('Kebab: should transforms "helloWorld" to "hello-world"', () => {
    const value: string = 'helloWorld';
    expect(pipe.transform(value, 'kebab')).toEqual('hello-world');
  });

  it('Snake: should transforms "hello-world" to "hello_world"', () => {
    const value: string = 'hello-world';
    expect(pipe.transform(value, 'snake')).toEqual('hello_world');
  });

  it('Inverse: should transforms "HeLlO wOrLD" to "helLo WoRld"', () => {
    const value: string = 'HeLlO wOrLD';
    expect(pipe.transform(value, 'inverse')).toEqual('hElLo WoRld');
  });

});