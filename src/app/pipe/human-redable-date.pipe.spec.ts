import { HumanRedableDatePipe } from './human-redable-date.pipe';

describe('HumanRedableDatePipe', () => {
  it('create an instance', () => {
    const pipe = new HumanRedableDatePipe();
    expect(pipe).toBeTruthy();
  });
});
