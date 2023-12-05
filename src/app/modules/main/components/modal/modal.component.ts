import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  movieSelected: Movie;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Movie) { 
    this.movieSelected = data;
  }

  goToTrailer(movie: Movie) {
    window.open(movie.trailer, '_blank');
  }
}
