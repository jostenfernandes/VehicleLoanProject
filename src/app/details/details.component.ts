import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private vhs:DetailsService) { }
  personalList:any;

  ngOnInit(): void 
  {
    this.vhs.getAllDetails().subscribe(
      (data)=>{
        console.log(data);
        this.personalList = data;
      },
      (error)=>
      {
        console.log(error);
      }
    )
  }

}
