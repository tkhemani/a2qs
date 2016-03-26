import  * as a2 from 'angular2/core';
// import { MdCheckbox } from '@angular2-material/checkbox';
export namespace Math {

@a2.Component({
    selector: 'templateForm',
    // directives: [MdCheckbox], 
    templateUrl: 'app/TemplateForm/templateForm.html',
    styles: [`
    .ng-invalid.ng-touched {
    border: 10px solid red;
    }
    `]
})
export class TemplateForm implements a2.OnInit {

log = x => console.log(x);
// log(x) {
//    console.log(x);  
// }
    constructor() { }

    ngOnInit() { 

    }
    
    onSubmit = form => console.log(form);

}
}