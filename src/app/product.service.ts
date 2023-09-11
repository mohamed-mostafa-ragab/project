
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiKey = '0c3547b1c1c7a21fc554b617bff38eb2';
  language: string = 'en-Us';
  constructor(private http: HttpClient) { }


  getAllproducts(pageNumber: number = 1): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=${this.language}&page=${pageNumber}`
    );
  }

  getproductsById(movieID: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${movieID}?api_key=${this.apiKey}`
    );
  }
  searchAllMovies(movieName: string, pageNumber: number = 1): Observable<any> {
    if (movieName == '') {
      return this.getAllproducts();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&query=${movieName}&page=${pageNumber}`
      );
    }
  }
  changeLanguage() {
    this.language = this.language == 'en-Us' ? 'ar-SA' : 'en-Us';

    return this.language;
  }
}
 
 

