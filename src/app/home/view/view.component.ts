import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '../home.service';
import {HttpClient} from '@angular/common/http';
import {Post} from '../post.meta';
// import {environment} from '../../../environments/environment';
import {environment} from '../../../environments/environment.prod';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [HomeService]
})
export class ViewComponent implements OnInit {
  model: Post;
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

    this.route.params.subscribe(data => {
      console.log(data.id)
      this.http.get(environment.api_url + 'posts/' + data.id).subscribe((res: Post) => {
        this.model = res;
      });
    });
  }

}
