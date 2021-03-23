import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { CreateNoteComponent } from './pages/create-note/create-note.component';
import { ListNotesComponent } from './pages/list-notes/list-notes.component';
import { CardNoteComponent } from './components/card-note/card-note.component';
@NgModule({
  declarations: [
    CreateNoteComponent,
    ListNotesComponent,
    CardNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [
    CreateNoteComponent,
    ListNotesComponent,
  ]
})
export class NoteModule { }
