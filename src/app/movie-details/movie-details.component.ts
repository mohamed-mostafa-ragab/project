import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  salectedmovie: any;
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  constructor(public route: ActivatedRoute, private moviesServ: MovieService) { }

  ngOnInit(): void {
    let Id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.moviesServ.getproductsById1(Id).subscribe({
      next: (response) => {
        this.salectedmovie = response;
      }
    })
  }



}

