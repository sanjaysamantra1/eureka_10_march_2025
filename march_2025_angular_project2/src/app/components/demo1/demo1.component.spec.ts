import { Demo1Component } from "./demo1.component";

describe('This is Test Suite for Demo-1 Component', () => {
  let demo1: Demo1Component;

  it('Lets verify add function', () => {
    console.log('This is it-1')
    // let demo1 = new Demo1Component();
    expect(demo1.add(2, 3)).toBe(5);
    expect(demo1.add(-2, -3)).toBe(-5);
    expect(demo1.add(-2, 3)).toBe(1);
    expect(demo1.add(2, -3)).toBe(-1);
  })
  it('Lets verify sub function', () => {
    console.log('This is it-2')
    // let demo1 = new Demo1Component();
    expect(demo1.sub(2, 3)).toBe(-1);
    expect(demo1.sub(-2, -3)).toBe(1);
    expect(demo1.sub(-2, 3)).toBe(-5);
  })
  it('Lets verify mul function', () => {
    console.log('This is it-3')
    // let demo1 = new Demo1Component();
    expect(demo1.mul(2, 3)).toBe(6);
    expect(demo1.mul(-2, -3)).toBe(6);
    expect(demo1.mul(-2, 3)).toBe(-6);
  })
  it('Lets verify isEven function', () => {
    // let demo1 = new Demo1Component();
    expect(demo1.isEven(2)).toBe(true);
    expect(demo1.isEven(3)).not.toBe(true);
    expect(demo1.isEven(3)).toBe(false);
  })
  it('Lets verify sumofDigits function', () => {
    // let demo1 = new Demo1Component();
    expect(demo1.sumofDigits(125)).toBe(8);
    expect(demo1.sumofDigits(123)).toBe(6);
  })
  it('Lets verify addNewCar function', () => {
    // let demo1 = new Demo1Component();
    expect(demo1.cars).toBeDefined();
    expect(demo1.cars.length).toBe(2);
    expect(demo1.cars).toEqual(['tata', 'honda']);
    demo1.addNewCar('maruti');
    expect(demo1.cars).toBeDefined();
    expect(demo1.cars.length).toBe(3);
    expect(demo1.cars).toEqual(['tata', 'honda', 'maruti']);
  })

  beforeAll(() => { // 1 before all the test cases
    console.log('Before All');
    demo1 = new Demo1Component();
  });
 
  beforeEach(() => { // n times (before Each test case)
    console.log('Before Each')
  });

  afterEach(() => { // n times (after Each test case)
    console.log('After Each')
  });

  afterAll(() => { // 1 after all the test cases
    console.log('After All')
  });

});