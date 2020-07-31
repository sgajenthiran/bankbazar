import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMIComponent } from './emi.component';
import { Route, RouterModule } from '@angular/router';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng5SliderModule
  ],
  declarations: [EMIComponent],
  exports: [EMIComponent]
})
export class EMIModule { }
