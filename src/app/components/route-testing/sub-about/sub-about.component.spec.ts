import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAboutComponent } from './sub-about.component';

describe('SubAboutComponent', () => {
  let component: SubAboutComponent;
  let fixture: ComponentFixture<SubAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
