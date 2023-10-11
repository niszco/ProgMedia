import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film/film.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-modif',
  templateUrl: './film-modif.component.html',
  styleUrls: ['./film-modif.component.scss']
})
export class FilmModifComponent implements OnInit {
  film: any
  constructor(
    private Film: FilmService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  NgOnInit() {
    const id = this.route.snapshot.params['id'];
    this.film = this.Film.getFilmById(id);
  }
}
