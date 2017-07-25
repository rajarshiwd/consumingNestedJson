import {Component,OnInit} from '@angular/core';
import{HolidaysService} from './holidays.service';
import{Router} from '@angular/router'



@Component({
  selector: 'app',
  template:`
  <md-toolbar color="primary"  routerLink='/' >Holidays App</md-toolbar>
<router-outlet></router-outlet>`,

  providers:[HolidaysService]
})
export class AppComponent implements OnInit{
  Users:any=[];
  constructor(private service:HolidaysService){

  }
  ngOnInit(){
    this.service.getusers().subscribe(users=>this.Users=users);
  }
  
}
