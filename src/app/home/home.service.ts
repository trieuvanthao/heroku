import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {NgxSpinnerService} from 'ngx-spinner';

// import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);


  }

  load() {
    return this.http.get(environment.api_url + 'posts');
  }

  // loadById(){
  //   return this.http.
  // }
  // getAll(): Observable<[string]> {
  //   return this.apiService.get('/tags')
  //     .pipe(map(data => data.tags));
  // }
}
