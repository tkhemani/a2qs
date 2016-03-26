import {Component} from 'angular2/core';
import {DemoBinding} from './demoBinding';
import {SummaryPipe} from './summary.pipe'
import {Math} from './TemplateForm/templateForm'
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [Math.TemplateForm]
})
export class AppComponent { 
    }

