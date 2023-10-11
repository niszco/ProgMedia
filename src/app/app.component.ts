import { Component, OnInit } from '@angular/core';
import { FilmService } from './services/film/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cinéma des aigris de la passerelle';

  films:any = [];

  constructor(private Film: FilmService) {}
  ngOnInit(): void {
    this.films = this.Film.films;
  }

  onAirAll() {
    this.Film.setOnAir();
  }

  noOnAirAll() {
    this.Film.setNoOnAir();
  }
}
