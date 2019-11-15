import { Component, OnInit } from '@angular/core';
import { ConectorService } from 'src/app/conector.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formEditar:FormGroup
  id:any

  constructor(private api:ConectorService, private active:ActivatedRoute, private formBuilder:FormBuilder) { 
    this.id = this.active.snapshot.paramMap.get('id')
  }

  editar() {
    console.log(this.formEditar.value);
    this.api.crear(this.formEditar.value).subscribe(response => {
      console.log(response);
    },error =>{
      console.log(error);
    });
  }

  guardarCambios(){
    this.api.actualizar(this.formEditar.value,this.id).subscribe(response => {
      console.log(response);
    },error =>{
      console.log(error);
    });
  }

  ngOnInit() {
    this.formEditar = this.formBuilder.group({
      marca:['',Validators.required],
      rodada:['',Validators.required],
      color:['',Validators.required],
      precio:['',Validators.required],
      cantidad:['',Validators.required]
    })

    this.api.getBike(this.id).subscribe(response =>{
      console.log(response);
      console.log(this.id);
      this.formEditar.get('marca').setValue(response.data.marca);
      this.formEditar.get('rodada').setValue(response.data.rodada);
      this.formEditar.get('color').setValue(response.data.color);
      this.formEditar.get('precio').setValue(response.data.precio);
      this.formEditar.get('cantidad').setValue(response.data.cantidad);
    })
  }

}
