import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddJobsComponent } from "./add-jobs.component";
import { MaterialsModule } from "../../materials/materials.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("AddJobsComponent", () => {
  let component: AddJobsComponent;
  let fixture: ComponentFixture<AddJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddJobsComponent],
      imports: [MaterialsModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
