import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

	items = Array(40);

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  onClick(valor: number){
  	console.log('Item:', valor);

  	this.popoverController.dismiss({
  		item: valor
  	});
  }

}
