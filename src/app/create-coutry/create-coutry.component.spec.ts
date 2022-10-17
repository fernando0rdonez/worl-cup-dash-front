import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoutryComponent } from './create-coutry.component';

describe('CreateCoutryComponent', () => {
  let component: CreateCoutryComponent;
  let fixture: ComponentFixture<CreateCoutryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCoutryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCoutryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
