import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

   async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopinfoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      //translucent: true,
      mode: 'ios',
      backdropDismiss: false
    });
    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log('Padre', data);
  }

}
