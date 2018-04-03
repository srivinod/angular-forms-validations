import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productName : AbstractControl;
  productCode : AbstractControl;

  pName : string;
  pCode : string;

  title = 'app';
  myForm : FormGroup;

  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      'productName':['',Validators.required],
      'productCode':['',Validators.required],
    });
  
  this.productName = this.myForm.controls['productName'];
  this.productCode = this.myForm.controls['productCode'];

      this.productName.valueChanges.subscribe(
        (pNameValue:string) => {
          console.log("Entered Product Name :", pNameValue);
          this.pName = pNameValue;
        }
      );

      this.productCode.valueChanges.subscribe(
        (pCodeValue:string) =>{
          console.log("Entered Product Code :", pCodeValue);
          this.pCode = pCodeValue;
        }
      );
  }

  onsubmit(value: string){
    console.log('Submitted Value',value);
  }

}
