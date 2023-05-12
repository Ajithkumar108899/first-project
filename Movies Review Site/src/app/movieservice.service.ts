import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  constructor(private http:HttpClient,private route:Router) { }
 
  
    createproduct(data:any):Observable<any>{
      return this.http.post('http://localhost:8086/create',data)
    }
}
