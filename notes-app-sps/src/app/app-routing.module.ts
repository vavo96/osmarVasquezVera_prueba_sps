import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteRoutingModule } from './modules/notes/note.routing';
import { UserRoutingModule } from './modules/users/user.routing';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ListUserComponent } from './modules/users/pages/list-user/list-user.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: '', component: ListUserComponent },
    ]
  },
  { path: '**', component: NotPageFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NoteRoutingModule,
    UserRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
