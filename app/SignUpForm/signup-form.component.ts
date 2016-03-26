import {Component} from 'angular2/core';
import * as common from 'angular2/common';
@Component({
    selector: 'signup-form',
    templateUrl: 'app/SignUpForm/signup-form.component.html'
})
export class SignUpFormComponent {
    
    form = new common.ControlGroup({
        userName: new common.Control('', common.Validators.required),
        password: new common.Control('', common.Validators.required)
    })
}

