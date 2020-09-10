import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaQueriesComponent } from './media-queries.component';

describe('MediaQueriesComponent', () => {
  let component: MediaQueriesComponent;
  let fixture: ComponentFixture<MediaQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
