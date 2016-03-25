import {Component} from 'angular2/core';
import {DemoBinding} from './demoBinding';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [DemoBinding]
})
export class AppComponent { 
   
    }

