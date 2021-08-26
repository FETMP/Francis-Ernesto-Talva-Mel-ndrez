import { Component, OnInit } from '@angular/core';
import { PolizaService } from '../poliza.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  form!: FormGroup;

  constructor(
    public polizaService: PolizaService,
    private router: Router
    ){}

  ngOnInit(): void {

    this.form = new FormGroup({
      producto: new FormControl('',[Validators.required, Validators.pattern('[a-zA-ZÁáÉéÍíÓóÑñÚú \-\']+')] ),
//      numero:
//      fecha_inicio:
//      fecha_fin:
//      estado:
    })
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.polizaService.create(this.form.value).subscribe(res =>{
      console.log('Póliza Creada Exitosamente!');
      this.router.navigateByUrl('poliza/index');
    })
  }
}
