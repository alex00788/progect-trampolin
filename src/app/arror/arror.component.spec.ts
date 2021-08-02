import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrorComponent } from './arror.component';

describe('ArrorComponent', () => {
  let component: ArrorComponent;
  let fixture: ComponentFixture<ArrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
