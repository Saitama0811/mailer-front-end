import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantMailComponent } from './important-mail.component';

describe('ImportantMailComponent', () => {
  let component: ImportantMailComponent;
  let fixture: ComponentFixture<ImportantMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
