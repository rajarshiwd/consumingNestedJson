import {Component,OnInit} from '@angular/core';
import{HolidaysService} from './holidays.service';
import{ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app',
  template: `
  
<ul *ngFor="let user of Users">
    <li >"Date:  "{{user.date}}</li>
    <li>"Name of Holiday: "{{user.name}}</li>
    <li>"Is public Holiday: "{{user.public | check}}</li>
</ul>
`,
  providers:[HolidaysService]
})
export class HolidayDetailComponent implements OnInit{
    users: any=[];
    Users:any=[];
   
    
    month:any;
    day:any;
    nam:string;
    
  constructor(private service:HolidaysService,private route:ActivatedRoute){

  }
  ngOnInit(){
    let date = this.route.snapshot.params['date'];
    
  this.users= date.split("");
  this.month= this.users[5]+this.users[6];
  this.day= this.users[8]+this.users[9];

  console.log(this.day);
  console.log(this.month);
  
 this.service.getuser(this.month,this.day).subscribe((res:any)=>this.Users=res);
  }


  }
  
