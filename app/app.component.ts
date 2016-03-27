import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {ControlGroup, FormBuilder} from	'angular2/common';	

@Component({
    selector: 'my-app',
    template: `
    <button (click)="clicked($event)">Click Me</button>
<form	[ngFormModel]="form">
				<input	type="text"	ngControl="search">
</form>	
    `
})
export class AppComponent implements OnInit{ 

  ngOnInit() {
   
  }
  form: ControlGroup;

  constructor(fb: FormBuilder) {
 	this.form	=	fb.group({
										search:	[]
					});
					var	search	=	this.form.find('search');
search.valueChanges
      .debounceTime(400)
	  .map(str	=>	console.log("Getting	deals	for	date	"	+	str))	
	  .subscribe(x	=>	console.log(x))
						
  }

  loca = 10;
  
  clicked($event) {
  }
}