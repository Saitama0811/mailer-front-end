import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedMailComponent } from './received-mail.component';

describe('ReceivedMailComponent', () => {
  let component: ReceivedMailComponent;
  let fixture: ComponentFixture<ReceivedMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
