import { Component, OnInit } from '@angular/core';

import { PolizaService } from '../poliza.service';
import { Poliza } from '../poliza';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  polizas: Poliza []= [];
  constructor(public polizaService: PolizaService) { }

  ngOnInit(): void {
    this.polizaService.getAll().subscribe((data: Poliza[])=>{
      this.polizas = data;
      console.log(this.polizas);
    })
  }

  deletePoliza(idpoliza: any){
    this.polizaService.delete(idpoliza).subscribe(res => {
      this.polizas = this.polizas.filter(item => item.idpoliza !==idpoliza);
    })
  }
}
