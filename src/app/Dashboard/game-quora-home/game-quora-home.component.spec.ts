import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameQuoraHomeComponent } from './game-quora-home.component';

describe('GameQuoraHomeComponent', () => {
  let component: GameQuoraHomeComponent;
  let fixture: ComponentFixture<GameQuoraHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameQuoraHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameQuoraHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
