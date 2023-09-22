import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardspaceComponent } from './cardspace.component';

describe('CardspaceComponent', () => {
  let component: CardspaceComponent;
  let fixture: ComponentFixture<CardspaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardspaceComponent]
    });
    fixture = TestBed.createComponent(CardspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
