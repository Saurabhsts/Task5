import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowDescriptionComponent } from './row-description.component';

describe('RowDescriptionComponent', () => {
  let component: RowDescriptionComponent;
  let fixture: ComponentFixture<RowDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
