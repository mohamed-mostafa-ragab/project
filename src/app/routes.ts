import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ContectUsComponent } from './contect-us/contect-us.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'moviedetails/:id', component: MovieDetailsComponent },
    { path: 'contect-us', component: ContectUsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'productsdetails/:id', component: ProductDetailsComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent }
];
