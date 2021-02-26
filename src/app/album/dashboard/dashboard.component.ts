import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  albumLength: number;
  averageGrade: number;
  topAlbumNames: string[];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbumList().subscribe((response) => {
      this.albumLength = response.length;
      const sum = response.reduce((accumulator, album) => {
        return accumulator + album.vote;
      }, 0);
      this.averageGrade = sum / this.albumLength;
      this.topAlbumNames = response
        .filter((album) => album.vote === 5)
        .map((album) => album.name);
    });
  }
}
