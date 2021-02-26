import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlbumFormComponent } from '../album-form/album-form.component';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  albums: Album[] = [];

  constructor(
    private albumService: AlbumService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.albumService.getAlbumList().subscribe((response) => {
      this.albums = response;
      console.log('list loaded');
    });
  }

  showForm(album = new Album()): void {
    this.matDialog
      .open(AlbumFormComponent, { data: album })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.load();
        }
      });
  }

  onDelete(album: Album): void {
    this.matDialog
      .open(ConfirmComponent)
      .afterClosed()
      .subscribe((result: boolean) => {
        if (result === true) {
          this.albumService.deleteAlbum(album).subscribe(() => {
            console.log('eliminato');
            this.load();
          });
        }
      });
  }
}
