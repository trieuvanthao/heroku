import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
import {HttpClient} from '@angular/common/http';
import {PageService} from '../services/PageService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService, PageService]
})
export class HomeComponent implements OnInit {
  today = new Date();
  list: any;
  allItems: any;
  p: number = 1;
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(
    private homeService: HomeService,
    private http: HttpClient,
    private pageService: PageService
  ) {

  }

  ngOnInit() {
    this.homeService.load().subscribe((data => {
      this.list = data;
      this.allItems = data['data'];

      // initialize to page 1
      this.setPage(1);
    }));
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pageService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log(this.pagedItems)
  }

}
