import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxUiComponent } from './text-box-ui.component';

describe('TextBoxUiComponent', () => {
  let component: TextBoxUiComponent;
  let fixture: ComponentFixture<TextBoxUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBoxUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
