import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  	MatToolbarModule
  ],
  exports:[ MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialsModule { }
