import { Component, OnInit, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'demoBinding',
    template: `
    <input type="text" [value]="valueModel" (input)="valueModel=$event.target.value" />
    <input type="text" [(ngModel)]="valueModel" />
    
    <input type="button" value="Clear" (click)="cleanValueModel.emit()">
    
    Preview: {{valueModel}}
    `
})
export class DemoBinding implements OnInit {

@Input() valueModel = "Initial test";
@Output() cleanValueModel: EventEmitter<any> = new EventEmitter();
    constructor() { 
    }

    ngOnInit() { 

    }

}