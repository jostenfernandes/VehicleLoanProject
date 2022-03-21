import { Component, OnInit } from '@angular/core';
import { RegiformService } from '../regiform.service';

@Component({
  selector: 'app-showregiform',
  templateUrl: './showregiform.component.html',
  styleUrls: ['./showregiform.component.css']
})
export class ShowregiformComponent implements OnInit {

  constructor(private vhs: RegiformService) { }
  regiformList: any;

  ngOnInit(): void {
    this.vhs.getAllRegiform().subscribe(
      (data)=>{
        console.log(data);
        this.regiformList=data;   
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

}
