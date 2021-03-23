import { Component, OnInit } from '@angular/core';
import { PeticionesNotesService } from '../../../../Services/peticiones-notes.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {
  public notas: Array<any>;

  constructor(private notesSrv: PeticionesNotesService) {
    this.notas = new Array();
  }

  ngOnInit(): void {
    this.notesSrv.getNotes().subscribe((notesConsults: any) => {
      this.notas = notesConsults;
    });
  }

}
