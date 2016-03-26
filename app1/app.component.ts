import {Component} from 'angular2/core';
import {DemoBinding} from './demoBinding';
import {SummaryPipe} from './summary.pipe'
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
import {Math} from './TemplateForm/templateForm'
@Component({
    selector: 'my-app',
    //templateUrl: 'app/app.component.html',
     template: `
    <alert type="info">ng2-bootstrap hello world!</alert>
  `,
    directives: [Math.TemplateForm]
})
export class AppComponent { 
    }

