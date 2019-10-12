import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material';
import { FooterComponent, HeaderComponent } from './components';

const modules = [CommonModule, MaterialModule];
const components = [FooterComponent, HeaderComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components]
})
export class SharedModule {}
