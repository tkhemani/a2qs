import {Component} from 'angular2/core';
import {DemoBinding} from './demoBinding';
import {SummaryPipe} from './summary.pipe'
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [DemoBinding],
    pipes: [SummaryPipe],
})
export class AppComponent { 
   //asdf = "Hello"
   largeText = "from the other side....tell you i'm sorry for all the things i've done"
    }

