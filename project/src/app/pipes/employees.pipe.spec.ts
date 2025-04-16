import { EmployeesPipe } from './employees.pipe';

describe('EmployeesPipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeesPipe();
    expect(pipe).toBeTruthy();
  });
});
