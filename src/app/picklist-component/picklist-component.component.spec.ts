import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicklistComponentComponent } from './picklist-component.component';

describe('PicklistComponentComponent', () => {
  let component: PicklistComponentComponent;
  let fixture: ComponentFixture<PicklistComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicklistComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicklistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
