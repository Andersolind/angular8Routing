import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PurchaseOrderModule } from "./purchase-order/purchase-order.module";
import { StoreModule } from "@ngrx/store";

@NgModule({
  declarations: [],
  imports: [CommonModule, PurchaseOrderModule, StoreModule.forRoot({})]
})
export class RootStoreModule {}
