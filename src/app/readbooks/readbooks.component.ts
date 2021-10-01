import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-readbooks',
  templateUrl: './readbooks.component.html',
  styleUrls: ['./readbooks.component.css']
})
export class ReadbooksComponent implements OnInit {

  constructor(private bookservice: BooksService,private router:Router) { }

  allbooks:any;
  show:true;
  ngOnInit() {
    this.bookservice.getBooklist().subscribe(res=>{
      console.log(res);
       this.allbooks=res;
    });
  }

  bookClick(){
    this.router.navigate(['book']);
  }

}
