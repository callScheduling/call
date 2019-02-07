import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtsCallComponent } from './tts-call.component';

describe('TtsCallComponent', () => {
  let component: TtsCallComponent;
  let fixture: ComponentFixture<TtsCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtsCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtsCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
