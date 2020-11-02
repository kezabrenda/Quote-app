import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCOComponent } from './quote-co.component';

describe('QuoteCOComponent', () => {
  let component: QuoteCOComponent;
  let fixture: ComponentFixture<QuoteCOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteCOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteCOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
