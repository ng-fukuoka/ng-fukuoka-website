import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { EventTableComponent } from './event-table/event-table.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [EventTableComponent, HomeComponent],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
