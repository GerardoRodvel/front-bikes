import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectorService {

  url='http://localhost:8000/';
  
  headers = new HttpHeaders ({
    'Content-Type':'application/json'});

  constructor(private http:HttpClient) {

   }
   //metodos
   listar():Observable<any>{
     return this.http.get(this.url+'api/bikes',{headers:this.headers});
   }

  crear(params:string):Observable<any>{
    return this.http.post(this.url+'api/bikes',params,{headers:this.headers});
  }

  actualizar(params:any,id:any):Observable<any>{
    return this.http.patch(`${this.url}api/bikes/${id}`,params);
  }

  eliminar(id:any):Observable<any>{
    return this.http.delete(`${this.url}api/bikes/${id}`);
  }

  getBike(id:any):Observable<any>{
    return this.http.get(`${this.url}api/bikes/${id}`);
  }

   
}
