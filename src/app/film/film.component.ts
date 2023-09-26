import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})

export class FilmComponent implements OnInit{

  @Input() filmName = "";
  @Input() filmOnAir = false;
  @Input() filmAffiche = "";

  constructor(){}

  ngOnInit(): void {
      
  }

  getOnAir() {
    return this.filmOnAir;
  }

  onWatchFilm() {
    console.log("Lecture du film démarré !")
  }
}
