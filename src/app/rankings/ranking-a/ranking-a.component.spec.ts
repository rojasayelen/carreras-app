import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingAComponent } from './ranking-a.component';

describe('RankingAComponent', () => {
  let component: RankingAComponent;
  let fixture: ComponentFixture<RankingAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
