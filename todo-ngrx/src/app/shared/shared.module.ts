import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';

const components = [
  HeaderComponent,
  ButtonComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components],
})
export class SharedModule { }
