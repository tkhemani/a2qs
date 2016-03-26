import { Component, OnInit, Input, Output, EventEmitter } from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
@Component({
    selector: 'test',
    styles:[],
    providers: [CourseService],
    directives: [AutoGrowDirective], 
    template: `
    <style>
  .zippy {
    font-weight: xx-large;
  }
</style>
    <input type="text" autoGrow />
<ul *ngFor="#course of courses">
<li [style.backgroundColor]="course%2 ? 'green' : 'red' " [class.zippy]="course%2">{{course}}</li>
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