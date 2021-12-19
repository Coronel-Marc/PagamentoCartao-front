import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly rootURL = 'http://localhost:1168/api';

  constructor(private http: HttpClient) { }
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    getData(){
      return this.http.get(this.rootURL + '/Pagamentos');
    }
    postData(formData: any){
      return this.http.post(this.rootURL + '/Pagamentos',formData);
    }
    putData(id: string,formData: any){  
      return this.http.put(this.rootURL + '/Pagamentos/'+id,formData);  
    }  
    deleteData(id: string){  
      return this.http.delete(this.rootURL + '/Pagamentos/'+id);  
    }  
}
