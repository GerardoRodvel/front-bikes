import { Component, OnInit, HostBinding } from '@angular/core';
import { ConectorService } from 'src/app/conector.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Bike} from 'src/app/models/Bike';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  @HostBinding('class') classess = 'row';



  bike: Bike = {
    id: 0,
    marca: '',
    rodada: '',
    color: '',
    precio: '',
    cantidad: '',
    image: ''
  };

  formAgregar:FormGroup

  constructor(private api: ConectorService, private formBuilder:FormBuilder, private router: Router) {

   }
   
   agregar() {
     
    console.log(this.formAgregar.value);
    this.api.crear(this.formAgregar.value).subscribe(response => {
      console.log(response);
      this.formAgregar.reset();
      this.router.navigate(['/index'])
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
      cantidad:['',Validators.required],
      image:['',Validators.required]
    })
  }

}
