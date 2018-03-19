import {ReversePipe} from 'ngx-pipes';

describe('Ngx pipes:', () => {
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('Reverse: should transforms "hello world" to "dlrow olleh"', () => {
    const value: string = 'hello world';
    expect(pipe.transform(value)).toEqual('dlrow olleh');
  });

});