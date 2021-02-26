import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AlbumFormComponent } from './album-form/album-form.component';
import { AlbumComponent } from './album/album.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [AlbumComponent, DashboardComponent, AlbumFormComponent, CardComponent, ConfirmComponent],
  imports: [SharedModule],
})
export class AlbumModule {}
