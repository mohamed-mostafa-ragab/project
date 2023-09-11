import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
 selector: 'app-products',
 templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
 })
export class ProductsComponent implements OnInit {

  imagePath: string = 'https://image.tmdb.org/t/p/w500';

  allProduct!: any[];
  language: string = 'en-Us';
  totalMovies!: number;
  pageSize: number = 20;
  currentPage: number = 1;
  constructor(private myproduct: ProductService) { }

  ngOnInit(): void {
     this.myproduct.getAllproducts(this.currentPage).subscribe({
    next: (response) => {
  
      this.allProduct = response.results;
      this.totalMovies = response.total_results
    },
  });
  } 
  searchMovies(movieName: string) {
    this.myproduct.searchAllMovies(movieName, this.currentPage).subscribe({
      next: (data) => {
        this.allProduct = data.results;
      },
    });
  }
  toggleDescription(productId:number){
    for (const movie of this.allProduct) {
       if(movie.id==productId){
          movie.showDetails=!movie.showDetails
       }
    }
 }

  
  changeLanguage() {
    this.language = this.myproduct.changeLanguage()
    this.myproduct.getAllproducts().subscribe({
      next: (response) => {
        this.allProduct = response.results;
      },
    });
  }

  changePage(pageInfo: PageEvent) {
    this.currentPage = pageInfo.pageIndex + 1;
    this.myproduct.getAllproducts(this.currentPage).subscribe({
      next: (response) => {
     
        this.allProduct = response.results;
        this.totalMovies = response.total_results
      },
    });
  }
}