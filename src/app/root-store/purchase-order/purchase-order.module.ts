import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PurchaceReducer } from "./purchase.reducer";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ jobs: PurchaceReducer }),
    EffectsModule.forRoot([Pri])
  ]
})
export class PurchaseOrderModule {}
