import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfTasksComponent } from './inf-tasks.component';

describe('InfTasksComponent', () => {
  let component: InfTasksComponent;
  let fixture: ComponentFixture<InfTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
