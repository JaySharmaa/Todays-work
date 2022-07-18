import { AfterViewInit, Component } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { Search } from './search';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'search';
  searchResults: Search[] = []; 
  searchTerm: any;

  constructor(private _userservice: UserserviceService) {}

  ngAfterViewInit() {
    this._userservice.getSearches().subscribe((e) => {
      // console.log(e);
      this.searchResults = e;
      this.data = e;
    });
  }

  data: Search[] = []; 

  onChange() {
    // console.log(this.searchTerm);
    if (this.searchTerm.length > 0) {
      this.data = [];

      this.searchResults.forEach((e) => {
        if (
           e.username.includes(this.searchTerm.trim().toLowerCase()) || e.email.includes(this.searchTerm.trim().toLowerCase())
        ) {
          this.data.push(e);
        }
      });
      // console.log(this.data);
    } else {
      this.data = this.searchResults;
    }
  }
}