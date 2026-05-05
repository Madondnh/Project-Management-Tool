import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { globalMessanger$, Test, Test2 } from '../../Test';
import { scan } from 'rxjs/internal/operators/scan';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, FormBuilder, FormControl, Validators, NgForm, NgModelGroup, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

let counter = 1;

@Component({
  selector: 'app-template-form-example',
  imports: [FormsModule],
  templateUrl: './template-form-example.component.html',
  styleUrl: './template-form-example.component.css'
})

export class TemplateFormExampleComponent {
  
  loadStockFromServer() {
    let newStock = new Stock('Test ' + counter++, 'TST', 20, 10);

    let stockFormModel = Object.assign({}, newStock);
    
    // Detele props that are not defined in the form, as this will cause errors 
    delete stockFormModel.previousPrice;
    delete stockFormModel.favorite;
    delete stockFormModel.confirmed;

    this.stock = stockFormModel;

    // this.stockForm.setValue(stockFormModel);
  }

  resetForm(formGroup:NgForm) {
    
    //formGroup.getFormGroup('hello world');

    console.log("Form Group Status", formGroup.status);
    console.log("Form Group Value", formGroup.value);

     console.log("Form Group Controls Raw", formGroup.controls['stockGroup']);

     console.log("Form Group Controls", formGroup.control.controls['stockGroup'].status);
    formGroup.reset();
  }

  resetGroup(formGroup:NgModelGroup) {
    
    //formGroup.getFormGroup('hello world');

    console.log("*** Form Group Status", formGroup.status);
    console.log("*** Form Group Value", formGroup.value);
  }

  public nameControl = new FormControl();

  log() {
    console.log("The STOCK", this.stock);
  }

  stock: Stock;
  testMyVar: string = "Hello from AppComponent!";

  onSubmit() {

  }
  //  formInput:HTMLFormElement;


  //router: any;

  constructor(private router: Router) {

   this.stock = new Stock('Test ' + counter++, 'TST', 20, 10);

  }

  ngOnDestroy(): void {
    console.log('AppComponent page 1 destroyed !');
  }

  ngOnInit(): void {
  }

  onEdit(id: number): void {
    this.router.navigate(['/product/new2']);
  }

  set stockName(event: Event) {
    this.stock.name = (event.target as HTMLInputElement).value;
  }
}

class Stock {
  confirmed?: 0 | 1 = 0;
  favorite? = false;

  constructor(public name: string, public code: string,
    public price: number, public previousPrice?: number) {

  }
}

