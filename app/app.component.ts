import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Rx'

@Component({
    selector: 'my-app',
    template: '<button (click)="clicked($event)">Click Me</button>'
})
export class AppComponent implements OnInit{ 

  ngOnInit() {
    console.clear()
    let a = 'ngOnInit $loca'
  }

  loca = 10;
  
  clicked($event) {
    console.log($event);
  }
}