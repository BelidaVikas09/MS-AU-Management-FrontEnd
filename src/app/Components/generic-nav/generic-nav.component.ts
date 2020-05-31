import { Component, OnInit,Input } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { SocialUser } from 'angular-6-social-login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-generic-nav',
  templateUrl: './generic-nav.component.html',
  styleUrls: ['./generic-nav.component.css']
})
export class GenericNavComponent implements OnInit {
  
  @Input() componame:string;
  public user:any=SocialUser
  constructor(private localstorage:LocalStorageService,
    private router:Router) { }

  ngOnInit(): void {
      this.user=JSON.parse(this.localstorage.get("islogged"))
  }
  public redirectHome(){
    this.router.navigate(['\menu']);
  }
  public logout(){
    this.localstorage.remove("islogged");
    this.router.navigate(['\login']);
  }
}
