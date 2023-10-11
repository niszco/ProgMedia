import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  films = [
    {
      title: "Jurrasic Park",
      onAir: false,
      filmAffiche: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/6a/Jurassic_Park_logo.svg/1200px-Jurassic_Park_logo.svg.png"
    },
    {
      title: "Star Wars",
      onAir: false,
      filmAffiche: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/langfr-220px-Star_Wars_Logo.svg.png"
    },
    {
      title: "Dune",
      onAir: true,
      filmAffiche: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg"
    }
  ]

  setOnAir() {
    for (const film of this.films) {
      film.onAir = true;
    }
  }

  setNoOnAir() {
    for (const film of this.films) {
      film.onAir = false;
      console.log(film);
    }
  }

  switchOnAir(index: number) {
    this.films[index].onAir = !this.films[index].onAir;
  }
}
