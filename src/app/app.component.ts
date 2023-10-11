import { Component, OnInit } from '@angular/core';
import { FilmService } from './services/film/film.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cinéma des aigris de la passerelle';

  time: number = 0;
  films:any = [];

  constructor(private Film: FilmService) {}
  ngOnInit(): void {
    const counter = interval(1000);

    counter.subscribe(
      (value) => {
        this.time = value;
      },
      (error) => {
        console.log('Error :' + error)
      },
      () => {
        console.log('Observable complete !')
      }
    )

    this.films = this.Film.films;
  }

  onAirAll() {
    this.Film.setOnAir();
  }

  noOnAirAll() {
    this.Film.setNoOnAir();
  }
}
