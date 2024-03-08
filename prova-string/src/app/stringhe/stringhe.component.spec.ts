import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringheComponent } from './stringhe.component';

describe('StringheComponent', () => {
  let component: StringheComponent;
  let fixture: ComponentFixture<StringheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringheComponent]
    });
    fixture = TestBed.createComponent(StringheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
