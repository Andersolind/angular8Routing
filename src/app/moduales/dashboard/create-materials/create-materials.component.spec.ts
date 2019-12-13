import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateMaterialsComponent } from "./create-materials.component";
import { MaterialsModule } from "../../materials/materials.module";

describe("CreateMaterialsComponent", () => {
  let component: CreateMaterialsComponent;
  let fixture: ComponentFixture<CreateMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMaterialsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
