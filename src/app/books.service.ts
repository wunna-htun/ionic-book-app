import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const baseurl=environment.baseurl;
@Injectable({
  providedIn: 'root'
})
export class BooksService {

constructor(private http: HttpClient) { }

getBooklist(){
  console.log(baseurl);


  return this.http.get(baseurl+'books');
}

}
