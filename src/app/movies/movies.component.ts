import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements  OnInit {

  imagePath: string = 'https://image.tmdb.org/t/p/w500';

  allMovies!: any[];
  language: string = 'en-Us';
  totalMovies!: number;
  pageSize: number = 20;
  currentPage: number = 1;
  constructor(private myMovie: MovieService) { }

  ngOnInit(): void {
    this.myMovie.getAllproducts1(this.currentPage).subscribe({
      next: (response) => {

        this.allMovies = response.results;
        this.totalMovies = response.total_results
      },
    });
  }

  searchMovies(movieName: string) {
    this.myMovie.searchAllMovies1(movieName, this.currentPage).subscribe({
      next: (data) => {
        this.allMovies = data.results;
      },
    });
  }
  changeLanguage() {
    this.language = this.myMovie.changeLanguage()
    this.myMovie.getAllproducts1().subscribe({
      next: (response) => {
        this.allMovies = response.results;
      },
    });
  }
  toggleDescription(movieId:number){
    for (const movie of this.allMovies) {
       if(movie.id==movieId){
          movie.showDetails=!movie.showDetails
       }
    }
 }

  changePage(pageInfo: PageEvent) {
    this.currentPage = pageInfo.pageIndex + 1;
    this.myMovie.getAllproducts1(this.currentPage).subscribe({
      next: (response) => {
        console.log(response);
        this.allMovies = response.results;
        this.totalMovies = response.total_results
      },
    });
  }
}
