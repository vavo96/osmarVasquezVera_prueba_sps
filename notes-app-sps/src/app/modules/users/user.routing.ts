import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NavbarComponent } from '../../core/navbar/navbar.component';

import { ListUserComponent } from './pages/list-user/list-user.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';



const routes: Routes = [
  {
    path: 'users',
    component: NavbarComponent,
    children: [
      { path: '', component: ListUserComponent },
      { path: 'create', component: CreateUserComponent },
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class UserRoutingModule { }
