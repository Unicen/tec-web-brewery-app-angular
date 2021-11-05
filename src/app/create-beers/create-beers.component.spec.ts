import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBeersComponent } from './create-beers.component';

describe('CreateBeersComponent', () => {
  let component: CreateBeersComponent;
  let fixture: ComponentFixture<CreateBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
