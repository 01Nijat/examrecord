import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImtahanListComponent } from './imtahan-list.component';

describe('ImtahanListComponent', () => {
  let component: ImtahanListComponent;
  let fixture: ComponentFixture<ImtahanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImtahanListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImtahanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
