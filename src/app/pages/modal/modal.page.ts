import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async abrirModal(){

  	const modal = await this.modalController.create({
  		component: ModalInfoPage,
	    cssClass: 'my-custom-class',
	    componentProps: {
	      nombre: 'Engelber',
	      pais: 'Venezuela'
	    }
  	});

  	await modal.present();

  	const { data } = await modal.onWillDismiss();

  	console.log('Retorno del modal', data);
  }

}
