import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { LocalStorageService } from 'angular-web-storage';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,
    private localstorage:LocalStorageService) { }
  addUser(id:number,name:string,email:string,profilepic:string){
    return this.http.post('msau/user',{
      id:id,
      name:name,
      email:email,
      profilepic:profilepic,
    })
 }
loggedIn(){
  return !!this.localstorage.get("islogged");
}
}
