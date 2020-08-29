import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
