import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteRecordComponent } from './vote-record.component';

describe('VoteRecordComponent', () => {
  let component: VoteRecordComponent;
  let fixture: ComponentFixture<VoteRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
