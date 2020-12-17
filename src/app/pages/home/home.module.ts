import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from 'src/app/partials/header/header.module';
import { HomeComponent } from './home.component';
import { FooterModule } from 'src/app/partials/footer/footer.module';
import { DropdownModule } from 'src/app/partials/dropdown/dropdown.module';




@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    FooterModule,
    DropdownModule
  ]
})
export class HomeModule { }
