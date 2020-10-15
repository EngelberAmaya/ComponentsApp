import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPageRoutingModule } from './popover-routing.module';

import { PopoverPage } from './popover.page';
import { ComponentsModule } from '../../components/components.module';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';


@NgModule({
  entryComponents: [
  	PopinfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PopoverPage]
})
export class PopoverPageModule {}
