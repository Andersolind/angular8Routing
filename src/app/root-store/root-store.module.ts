import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PurchaseOrderModule } from "./purchase-order/purchase-order.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { PurchaceReducer } from "./purchase-order/purchase.reducer";
import { PurchaseEffects } from "./purchase-order/purchase.effects";

@NgModule({
  declarations: [],
  imports: [CommonModule, PurchaseOrderModule, EffectsModule.forRoot([])]
})
export class RootStoreModule {}
