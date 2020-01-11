import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomerDashboardComponent } from "./customer-dashboard.component";
import { IJobSignUp } from "src/app/models/dashboard.modal";
import { MaterialsModule } from "../../materials/materials.module";

describe("CustomerDashboardComponent", () => {
  let component: CustomerDashboardComponent;
  let fixture: ComponentFixture<CustomerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //setup
      declarations: [CustomerDashboardComponent],
      imports: [MaterialsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDashboardComponent);
    component = fixture.componentInstance;
    let data: IJobSignUp = {
      jobName: "",
      address: "",
      clientName: "",
      notes: "",
      phone: "",
      jobNumber: ""
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    component.mockJobs();
  });

  it("should call the mockJobs method", async(() => {
    spyOn(component, "mockJobs");
    component.mockJobs();
    fixture.whenStable().then(() => {
      expect(component.mockJobs).toHaveBeenCalled();
    });
  }));
});
