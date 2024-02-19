import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverspaceComponent } from './discoverspace.component';

describe('DiscoverspaceComponent', () => {
  let component: DiscoverspaceComponent;
  let fixture: ComponentFixture<DiscoverspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverspaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
