import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album/album.component';
import { DashboardComponent } from './album/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: 'core',
    children: [
      {
        path: '',
        redirectTo: 'album',
        pathMatch: 'full',
      },
      { path: 'album', component: AlbumComponent, canActivate: [AuthGuard] },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: '',
    redirectTo: 'core',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'core',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
