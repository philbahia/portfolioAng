import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaradmComponent } from './navbaradm.component';

describe('NavbaradmComponent', () => {
  let component: NavbaradmComponent;
  let fixture: ComponentFixture<NavbaradmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbaradmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbaradmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
