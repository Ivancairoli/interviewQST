import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from './models/movie.model';
import { MoviesService } from './services/movies.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  searchTerm: string = '';
  filteredMovies: Movie[] = [];
  movies: Movie[] = [];
  @Output('movie')movieEmitter: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor(private moviesService: MoviesService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();
    this.filteredMovies = this.movies;
  }

  addToWatch(movie: Movie): void {
    this.movieEmitter.emit(movie)
  }

  viewDetails(movie: Movie): void{
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      height: '600px',
      data: movie
    })
  }

  filterMovies(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.searchTerm = inputValue;

    this.filteredMovies = this.searchTerm ? this.movies.filter(movie =>
      movie.title.toLowerCase().includes(inputValue.toLowerCase()) ||
      movie.releaseDate.toLowerCase().includes(inputValue.toLowerCase())
    ) : this.movies;
  }
}
