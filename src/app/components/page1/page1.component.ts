import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { globalMessanger$, Test, Test2 } from '../../Test';
import { scan } from 'rxjs/internal/operators/scan';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

let counter = 1;

@Component({
  selector: 'app-page1',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component implements OnInit, OnDestroy {
  
  formRef!:NgForm;
  
  loadStockFromServer() {
    this.stock = new Stock('Test ' + counter++, 'TST', 20, 10);

    let stockFormModel = Object.assign({}, this.stock);
    
    // Detele props that are not defined in the form, as this will cause errors 
    delete stockFormModel.previousPrice;
    delete stockFormModel.favorite;
    delete stockFormModel.confirmed;

    this.stockForm.setValue(stockFormModel);
  }

  resetForm() {
    this.stockForm.reset();
//    console.log("Form Values", this.formRef.value.stockGroup);
  }

  patchStockForm() {
    this.stock = new Stock(`Test ${counter++}`, 'TST', 20, 10);
    this.stockForm.patchValue(this.stock);
  }

  public nameControl = new FormControl();

  stockFormA: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)])
  });

  stockForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)])
  });

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

class CreateStockComponent {
  public stockForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    console.log('Stock Form Value', this.stockForm.value);
  }
}

