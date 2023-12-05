import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.css']
})
export class ListModalComponent {

  myList: Movie[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Movie[]) { 
    this.myList = data
  }

  outOfTheList(movie:Movie){
    const index = this.myList.findIndex(m => m.title === movie.title);
    this.myList.splice(index, 1);
  }

}
