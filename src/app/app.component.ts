import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // productName : AbstractControl;
  // productCode : AbstractControl;

  title = 'app';
  myForm : FormGroup;

  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      'productName':['',Validators.required],
      'productCode':['',Validators.required],
    });
  
  //  Second Approach Commented
  //  this.productName = this.myForm.controls['productName'];
  //  this.productCode = this.myForm.controls['productCode'];

  }

  onsubmit(value: string){
    console.log('Submitted Value',value);
  }

}
