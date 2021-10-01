import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-readingbooks',
  templateUrl: './readingbooks.component.html',
  styleUrls: ['./readingbooks.component.css']
})
export class ReadingbooksComponent implements OnInit {

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
