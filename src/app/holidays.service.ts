import{Injectable} from '@angular/core';

import 'rxjs/add/operator/map';

import { Http, Response, Headers } from '@angular/http';






@Injectable()

export class HolidaysService{
    
    url:string="https://holidayapi.com/v1/holidays?key=79767cba-ea98-4bcb-ab46-0641b9e56a3a&country=US&year=2016";
   
users:any[];
constructor(private http :Http){

}

  getusers() {
    return this.http.get(this.url)
      .map(res =>res.json().holidays);

  }
    

// for id routing 
getuser(month:any,day:any){


  console.log("itgitigitg");

 return  this.http.get("https://holidayapi.com/v1/holidays?key=79767cba-ea98-4bcb-ab46-0641b9e56a3a&country=US&year=2016&month="+month+"&day="+day)
  .map(res => res.json().holidays);
     

}


}