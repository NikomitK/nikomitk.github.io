import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardspaceComponent } from './cardspace/cardspace.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CardspaceComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ], 
  exports: [
    CardspaceComponent
  ]
})
export class OverviewModule { }
