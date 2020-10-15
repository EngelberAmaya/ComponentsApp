import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

	loading: any;

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
  	this.presentLoading2();
  	/*this.presentLoading('Espere por favor');
  	setTimeout(() => {
  		//this.loading.onDidDismiss();
  		const { role, data } = await this.loading.onDidDismiss();
  	}, 1500);*/
  }

  	
	

	async presentLoading2() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Espere por favor',
      duration: 1500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
