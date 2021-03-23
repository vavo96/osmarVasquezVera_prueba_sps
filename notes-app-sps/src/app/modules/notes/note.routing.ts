import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { CreateNoteComponent } from './pages/create-note/create-note.component';
import { ListNotesComponent } from './pages/list-notes/list-notes.component';



const routes: Routes = [
  {
    path: 'notes',
    component: NavbarComponent,
    children: [
      { path: '', component: ListNotesComponent },
      { path: 'create', component: CreateNoteComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class NoteRoutingModule { }
