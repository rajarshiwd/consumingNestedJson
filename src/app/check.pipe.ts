import{Pipe,PipeTransform,Injectable} from '@angular/core';
@Pipe({
    name: 'check'
})
@Injectable()
export class CheckPipe implements PipeTransform{

    transform(value:any){
        return value? '\u2713' : '\u2718';

    }

}