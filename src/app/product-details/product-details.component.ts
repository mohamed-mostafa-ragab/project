import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  selactedproduct:any;
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  constructor(public route: ActivatedRoute, private moviesServ: ProductService ) { }

  ngOnInit(): void {
    let Id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.moviesServ.getproductsById(Id).subscribe({
      next: (response) => {
        this.selactedproduct = response;
      }
    })
  }
 


  }

