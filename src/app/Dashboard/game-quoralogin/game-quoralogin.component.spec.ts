import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameQuoraloginComponent } from './game-quoralogin.component';

describe('GameQuoraloginComponent', () => {
  let component: GameQuoraloginComponent;
  let fixture: ComponentFixture<GameQuoraloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameQuoraloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameQuoraloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
