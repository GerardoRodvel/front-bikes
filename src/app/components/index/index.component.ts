import { Component, OnInit } from '@angular/core';
import { ConectorService } from 'src/app/conector.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  //guardo mis datos
  bikes: any

  constructor(private api: ConectorService) { 

  }

  eliminar(bikes) {
    console.log(bikes.id);
    this.api.eliminar(bikes.id).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    },error =>{
      console.log(error);
    });
  }

  ngOnInit() {
    this.api.listar().subscribe(response => {
      console.log(response);
      this.bikes = response.data;
    }, error => {
      console.log(error);
    });

  
  }

}
