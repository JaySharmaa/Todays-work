import { Component, OnInit } from '@angular/core';
import { ListService } from './list-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myNewApp';
  public totalItem: number = 0;
  public searchTerm!: string

  constructor(private list: ListService) { }


  ngOnInit(): void {
    this.list.getProducts()
      .subscribe(e => {
        this.totalItem = e.length;
      })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm)
    this.list.search.next(this.searchTerm);
  }
}


