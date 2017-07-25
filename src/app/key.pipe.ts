import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
    

  transform(data:any){
  var  chartData:any=[];


for(var key in data) {        
    var properties = data[key];
    

    if(typeof properties === "object") {
       var array = [];

       for(var propKey in properties) {
           
array.push(JSON.stringify(properties[propKey]));
       }

      chartData.push(array);
    }     

}

return(chartData) ;

  }

 
}