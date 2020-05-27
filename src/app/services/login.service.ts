import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  addUser(id:number,name:string,email:string,profilepic:string){
    return this.http.post('msau/user',{
      id:id,
      name:name,
      email:email,
      profilepic:profilepic,
    })
}
}
