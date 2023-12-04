import { Component, OnInit } from '@angular/core';
import { Movie } from './modules/main/models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interviewQST';
  myList: Movie[] = [];

  ngOnInit(): void {
  }

  receiveMovie(movie: Movie){
    this.myList.push(movie);
  }
}
