import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from './models/movie.model';
import { MoviesService } from './services/movies.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { ListModalComponent } from './components/list-modal/list-modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  searchTerm: string = '';
  filteredMovies: Movie[] = [];
  movies: Movie[] = [];
  badge: number = 0;
  myList: Movie[] = [];

  constructor(private moviesService: MoviesService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();
    this.filteredMovies = this.movies;
  }

  addToWatch(movie: Movie): void {
    const index = this.myList.findIndex(m => m.title === movie.title);
    if (index >= 0) {
      this.myList.splice(index, 1);
      this.badge = Math.max(0, this.badge - 1);
    } else {
      this.myList.push(movie);
      this.badge++;
    }
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

  openList($event: any){
    const dialogRef = this.dialog.open(ListModalComponent, {
      width: '400px',
      height: '400px',
      data: this.myList
    })
  }

  isInWatchList(movie: Movie): boolean {
    return this.myList.some(m => m.title === movie.title);
  }
}
