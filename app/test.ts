import { Component, OnInit, Input, Output, EventEmitter } from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
@Component({
    selector: 'test',
    providers: [CourseService],
    directives: [AutoGrowDirective], 
    template: `
    <input type="text" autoGrow />
<ul *ngFor="#course of courses">
<li>{{course}}</li>
</ul>
    `

})

export class test implements OnInit {
    content = "localVar";
    courses = [];
    //@Input() content:string
    //@Output() outEvent: EventEmitter<any> = new EventEmitter();
    
    constructor(courseService: CourseService) { 
        this.courses = courseService.getCourses();
}

    ngOnInit() { }

}