import { Component } from '@angular/core';
import { Test } from '../../Test';

@Component({
  selector: 'app-page2',
  imports: [],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

  constructor() { 

     Test();  
  } 

}
