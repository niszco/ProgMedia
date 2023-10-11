import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { HomeComponent } from './home/home.component';
import { FilmNewComponent } from './film-new/film-new.component';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { FilmModifComponent } from './film-modif/film-modif.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FilmService } from './services/film/film.service';

const routes: Routes = [
  {
    path: 'films',
    component: FilmListComponent
  },
  {
    path: 'new',
    component: FilmNewComponent
  },
  {
    path: 'modif/:id',
    component: FilmModifComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule {

}
