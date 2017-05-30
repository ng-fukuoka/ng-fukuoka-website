import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [NavbarComponent, FooterComponent],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule { }
