import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingBComponent } from './ranking-b.component';

describe('RankingBComponent', () => {
  let component: RankingBComponent;
  let fixture: ComponentFixture<RankingBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
