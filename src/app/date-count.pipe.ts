import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): number {
    const todayDate:Date = new Date();
    let todayYMD:any = new Date(todayDate.getFullYear(),todayDate.getMonth(),todayDate.getDate())
    let diff:number = Math.abs(todayYMD-value);
    let seconds = 86400;
    let dateDiff = diff * 0.001
    var dateCounter = dateDiff/seconds

    if(dateCounter>=1 && value > todayYMD){
      return dateCounter
    }
    else{
      return 0
    }

  }

}
