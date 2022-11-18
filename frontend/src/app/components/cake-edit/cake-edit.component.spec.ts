import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeEditComponent } from './cake-edit.component';

describe('CakeEditComponent', () => {
  let component: CakeEditComponent;
  let fixture: ComponentFixture<CakeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
