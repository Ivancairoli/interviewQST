import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from '../../main/models/movie.model';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('movies')moviesInTheList: Movie[] = [];
  badge: number = 0;

  constructor() { }

  ngOnInit(): void {
    
  }


}
