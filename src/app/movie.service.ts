
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiKey = '0c3547b1c1c7a21fc554b617bff38eb2';
  language: string = 'en-Us';
  constructor(private http: HttpClient) { }


  getAllproducts1(pageNumber: number = 1): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=${this.language}&page=${pageNumber}`
    );
  }

  getproductsById1(movieID: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${this.apiKey}`
    );
  }
  searchAllMovies1  (movieName: string, pageNumber: number = 1): Observable<any> {
    if (movieName == '') {
      return this.getAllproducts1();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&query=${movieName}&page=${pageNumber}`
      );
    }
  }
  changeLanguage() {
    this.language = this.language == 'en-Us' ? 'ar-SA' : 'en-Us';

    return this.language;
  }
}
