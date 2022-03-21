import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkeligibility',
  templateUrl: './checkeligibility.component.html',
  styleUrls: ['./checkeligibility.component.css']
})
export class CheckeligibilityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checkEligibility(item:any)
  {
    console.warn(item);
    
  }

}
