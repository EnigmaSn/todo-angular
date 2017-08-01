import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFirstAppComponent } from './js-first-app.component';

describe('JsFirstAppComponent', () => {
  let component: JsFirstAppComponent;
  let fixture: ComponentFixture<JsFirstAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsFirstAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsFirstAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
