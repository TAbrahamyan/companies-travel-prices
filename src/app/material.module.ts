import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
  ],
})
export class MaterialModule { }