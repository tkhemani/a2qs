import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'demoBinding',
    template: `
    <input type="text" [value]="valueModel" (input)="valueModel=$event.target.value" />
    <input type="text" [(ngModel)]="valueModel" />
    
    <input type="button" value="Clear" (click)="valueModel = ''">
    
    Preview: {{valueModel}}
    `
})
export class DemoBinding implements OnInit {

valueModel = "Initial test"
    constructor() { }

    ngOnInit() { 

    }

}