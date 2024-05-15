import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisListComponent } from './pais-list/pais-list.component';
import { PaisDetailComponent } from './pais-detail/pais-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PaisListComponent, PaisDetailComponent],
  declarations: [PaisListComponent, PaisDetailComponent]
})
export class PaisModule { }
