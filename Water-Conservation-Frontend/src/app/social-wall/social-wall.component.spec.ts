import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialWallComponent } from './social-wall.component';

describe('SocialWallComponent', () => {
  let component: SocialWallComponent;
  let fixture: ComponentFixture<SocialWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
