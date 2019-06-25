import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  today = new Date();
  list: any;
  constructor(
    private homeService: HomeService,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.homeService.load().subscribe((data => {
      console.log(data);
      this.list = data;
    }));
  }

}
