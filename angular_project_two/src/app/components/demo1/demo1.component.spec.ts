// import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1Component } from "./demo1.component"

// import { Demo1Component } from './demo1.component';

// describe('Demo1Component', () => {
//   let component: Demo1Component;
//   let fixture: ComponentFixture<Demo1Component>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [Demo1Component]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(Demo1Component);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('This is Test suite for Demo-01 Component',()=>{
  it('Lets verify add function', ()=>{
    let demo1 = new Demo1Component();
    expect(demo1.add(2,3)).toBe(5);
    expect(demo1.add(-2,-3)).toBe(-5);
    expect(demo1.add(-2,3)).toBe(1);
    expect(demo1.add(2,-3)).toBe(-1);
  })

  it('Lets verify sub function', ()=>{
    let demo1 = new Demo1Component();
    expect(demo1.sub(3,2)).toBe(1);
    expect(demo1.sub(3,-2)).toBe(5);
    expect(demo1.sub(-3,-2)).toBe(-1);
    expect(demo1.sub(-3,2)).toBe(-5);
  })
  it('Lets verify mul function', ()=>{
    let demo1 = new Demo1Component();
    expect(demo1.mul(3,2)).toBe(6);
    expect(demo1.mul(3,-2)).toBe(-6);
    expect(demo1.mul(-3,-2)).toBe(6);
    expect(demo1.mul(-3,2)).toBe(-6);
  })

  it('Lets verify is Even function',()=>{
    let demo1 = new Demo1Component();
    expect(demo1.isEven(2)).toBe(true);
    expect(demo1.isEven(3)).toBe(false);
    expect(demo1.isEven(0)).toBe(false);
    expect(demo1.isEven(-2)).toBe(true);
  })
})
