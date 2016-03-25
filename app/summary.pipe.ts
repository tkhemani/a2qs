import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {

    transform(value: string, args: string[]) {
        let summaryLetters = (args && args[0])? parseInt(args[0]): 20; //default is 20
        if(value) {return value.substring(0,summaryLetters) + '...'}
    }

}