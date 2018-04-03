import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myForm : FormGroup;

  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      'productName':['Apple Mac Pro'],
      'productCode':['MHX213455']
    })
  }

  onsubmit(value: string){
    console.log('Submitted Value',value);
  }

}
