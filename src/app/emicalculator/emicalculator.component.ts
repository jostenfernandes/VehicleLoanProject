import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EMIcalculatorComponent implements OnInit {

  title = 'EMI Calculator';

  public P:any;
  public R:any;
  public N:any;
  public E:any;

  calculate(){
      this.E = this.P * this.R[((1+this.R)^this.N)/(((1+this.R)^this.N)-1)];
  }
  constructor() { }

  ngOnInit(): void {
  }

}
