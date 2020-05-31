import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
   
  constructor(private localStorage:LocalStorageService,
    private router:Router) { }
  user=JSON.parse(this.localStorage.get("islogged"));
  logout(){
    this.localStorage.remove("islogged");
    this.router.navigate(['\login']);
  }
}
