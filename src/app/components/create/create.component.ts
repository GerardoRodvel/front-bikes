import { Component, OnInit } from '@angular/core';
import { ConectorService } from 'src/app/conector.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formAgregar:FormGroup

  constructor(private api: ConectorService, private formBuilder:FormBuilder) {

   }
   
   agregar() {
    console.log(this.formAgregar.value);
    this.api.crear(this.formAgregar.value).subscribe(response => {
      console.log(response);
      this.formAgregar.reset();
    },error =>{
      console.log(error);
    });
  }

  ngOnInit() {
    this.formAgregar = this.formBuilder.group({
      marca:['',Validators.required],
      rodada:['',Validators.required],
      color:['',Validators.required],
      precio:['',Validators.required],
      cantidad:['',Validators.required]
    })
  }

}
