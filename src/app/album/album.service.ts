import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from './album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private url = `${environment.apiUrl}/album`;

  constructor(private httpClient: HttpClient) {}

  getAlbumList(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(this.url);
  }
  createAlbum(album: Album): Observable<Album> {
    return this.httpClient.post<Album>(this.url, album);
  }
  updateAlbum(album: Album): Observable<Album> {
    return this.httpClient.put<Album>(`${this.url}/${album.id}`, album);
  }
  deleteAlbum(album: Album): Observable<number> {
    return this.httpClient.delete<number>(`${this.url}/${album.id}`);
  }
}
