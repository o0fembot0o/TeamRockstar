import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {
  constructor(private http: HttpClient) {
  }

  fetchSongs(): Observable<Object>{
    return this.http.get('http://localhost:3000/songs');
  }
}