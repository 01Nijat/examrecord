import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagirdListComponent } from './sagird-list.component';

describe('SagirdListComponent', () => {
  let component: SagirdListComponent;
  let fixture: ComponentFixture<SagirdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SagirdListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SagirdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
