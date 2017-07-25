import {Component,OnInit} from '@angular/core';
import{HolidaysService} from './holidays.service';
import{Router} from '@angular/router';
import{HolidayDetailComponent} from './holidaydetail.components'



@Component({
  selector: 'app',
  template:`
  <h3>The list of the holidays of 2016 </h3>
  <md-input-container>
  <input mdInput [mdDatepicker]="picker" placeholder="Choose a date">
  <button mdSuffix [mdDatepickerToggle]="picker"></button>
</md-input-container>
<md-datepicker #picker  [routerLink]="['/holiday',picker.value]"></md-datepicker>
<md-card color="primary"  *ngFor="let key of Users | ObjNgFor" >
  
  <h4 [routerLink]="['/holiday',key]">{{key}}</h4>
  </md-card>
`,
styles:[`
md-card{
  cursor:pointer;
}
md-card :hover{
  color:red;
}

`],
  providers:[HolidaysService]
})
export class HolidaysComponent implements OnInit{
  Users:any=[];
  
  constructor(private service:HolidaysService){

  
  }

  
  ngOnInit(){
   this.service.getusers().subscribe((users:any)=>this.Users=users);
  
  
    
   
  }
  
}