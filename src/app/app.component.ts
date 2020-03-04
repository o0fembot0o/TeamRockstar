import { Component, OnInit } from '@angular/core';
import {AlbumService} from './album.service';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'team-rockstar-mplayer';
  songs$;
  constructor(private albumService: AlbumService){}

  fetchSongs(){
    this.songs$ = this.albumService.fetchSongs();
  }
}