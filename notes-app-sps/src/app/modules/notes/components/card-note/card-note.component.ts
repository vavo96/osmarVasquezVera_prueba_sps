import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionesNotesService } from '../../../../Services/peticiones-notes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html',
  styleUrls: ['./card-note.component.scss']
})
export class CardNoteComponent implements OnInit {
  @Input() notes: Array<any>;

  constructor(
    private noteSrv: PeticionesNotesService
  ) {
    this.notes = new Array();
  }

  ngOnInit(): void {
  }

  async deleteNote(id: string, pos: number) {

    const { value } = await Swal.fire({
      title: 'Estas seguro de borrar esta nota',
      icon: 'question',
      showCancelButton: true
    });
    if (value) {
      this.noteSrv.deleteNote(id).subscribe(resp => {
        this.notes.splice(pos, 1);
        Swal.fire('Exito', 'La nota fue eliminada correctamente', 'success');
      });
    }
  }
}
