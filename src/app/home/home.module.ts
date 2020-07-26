import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { EventTableComponent } from './components';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [EventTableComponent, HomeComponent],
  imports: [CommonModule, MatButtonModule, MatTableModule, HomeRoutingModule],
})
export class HomeModule {}
