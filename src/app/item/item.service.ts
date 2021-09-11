import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Item } from './item'

@Injectable({
  providedIn: 'root',
})
export class ItemService {

 constructor(private http: HttpClient){}

 getItems(){
   return this.http.get("https://jsonplaceholder.typicode.com/todos");
 }
}
