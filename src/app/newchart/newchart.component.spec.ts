import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewchartComponent } from './newchart.component';

describe('NewchartComponent', () => {
  let component: NewchartComponent;
  let fixture: ComponentFixture<NewchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
