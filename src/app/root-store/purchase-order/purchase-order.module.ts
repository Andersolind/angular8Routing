import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PurchaceReducer } from "./purchase.reducer";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { PurchaseEffects } from "./purchase.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ jobs: PurchaceReducer }),
    EffectsModule.forRoot([PurchaseEffects])
  ]
})
export class PurchaseOrderModule {}
