import { MrAndMissPipe } from '../pipes/mr-and-miss.pipe';

describe('MrAndMissPipe', () => {
  it('create an instance', () => {
    const pipe = new MrAndMissPipe();
    expect(pipe).toBeTruthy();
  });
});
