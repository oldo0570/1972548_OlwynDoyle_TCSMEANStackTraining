import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultscomponentComponent } from './resultscomponent.component';

describe('ResultscomponentComponent', () => {
  let component: ResultscomponentComponent;
  let fixture: ComponentFixture<ResultscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
