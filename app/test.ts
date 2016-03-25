import { Component, OnInit, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'test',
    template: '<div>{{content}}</div>'
})

export class test implements OnInit {
    content = "localVar";
    //@Input() content:string
    //@Output() outEvent: EventEmitter<any> = new EventEmitter();
    
    constructor() { }

    ngOnInit() { }

}