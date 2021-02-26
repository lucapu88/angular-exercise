import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { RequiredLinkValidator } from 'src/app/validator/required-link.validator';
import { MaxNumberValidator } from 'src/app/validator/max-number.validator';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.css'],
})
export class AlbumFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private album: Album,
    private dialogRef: MatDialogRef<AlbumFormComponent>,
    private formBuilder: FormBuilder,
    private albumservice: AlbumService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: this.album.id,
      name: [this.album.name, Validators.required],
      year: this.album.year,
      artist: [this.album.artist, Validators.required],
      cover: [this.album.cover, [Validators.required, RequiredLinkValidator]],
      vote: [this.album.vote, MaxNumberValidator],
    });
  }

  onSubmit(): void {
    const request = this.form.value as Album;
    const api = this.album.id
      ? this.albumservice.updateAlbum(request)
      : this.albumservice.createAlbum(request);

    api.subscribe(() => {
      // this.isLoading = false;
      this.dialogRef.close(true);
      console.log('tutto ok');
    });
  }
}
