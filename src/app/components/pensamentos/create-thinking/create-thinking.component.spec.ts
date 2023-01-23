import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThinkingComponent } from './create-thinking.component';

describe('CreateThinkingComponent', () => {
  let component: CreateThinkingComponent;
  let fixture: ComponentFixture<CreateThinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateThinkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
