import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
// import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) {

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
