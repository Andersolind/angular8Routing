import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerDashboardComponent } from "./customer-dashboard/customer-dashboard.component";
import { AddJobsComponent } from "./add-jobs/add-jobs.component";
import { CreateMaterialsComponent } from "./create-materials/create-materials.component";
import { Routes, RouterModule } from "@angular/router";
import { MaterialsModule } from "../materials/materials.module";

const routes: Routes = [{ path: "", component: CustomerDashboardComponent }];

@NgModule({
  declarations: [
    CustomerDashboardComponent,
    AddJobsComponent,
    CreateMaterialsComponent
  ],
  imports: [RouterModule.forChild(routes), CommonModule, MaterialsModule]
})
export class DashboardModule {}
