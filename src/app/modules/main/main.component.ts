import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie.model';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();
  }

}
