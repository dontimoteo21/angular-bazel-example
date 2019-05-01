import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp14Component } from './cmp14/cmp14.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../../shared/material/material.module";

@NgModule({
  declarations: [Cmp14Component],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  exports: [Cmp14Component]
})
export class Module4Module { }