import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeticionesUsersService } from '../../../../Services/peticiones-users.service';
import { PeticionesNotesService } from '../../../../Services/peticiones-notes.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  public formUsr: FormGroup;
  public usrs: Array<any>;
  public edit: boolean;
  private idNota: string;

  constructor(
    private _route: ActivatedRoute,
    private createForms: FormBuilder,
    private noteSrv: PeticionesNotesService,
    private usrSrv: PeticionesUsersService,
  ) {
    this.edit = false;
    this.formUsr = this.createForms.group({
      idUser: ['', Validators.compose([Validators.required])],
      title: ['', Validators.compose([Validators.required])],
      content: ['', Validators.compose([Validators.required])],
      fecha: ['', Validators.compose([Validators.required])],
    });
    this.usrs = new Array();
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe(({ note }) => {
      if (note) {
        this.edit = true;
        this.setNoteEdit(note);
      }
    });
    this.usrSrv.getUsers().subscribe((userss: any) => {
      this.usrs = userss;
    });
  }

  setNoteEdit(id: string) {
    this.idNota = id;
    this.noteSrv.getNote(id).subscribe(notaConsultada => {
      const { idUser, title, content, fecha } = notaConsultada;
      this.formUsr.patchValue({
        idUser, title, content, fecha
      });
    })
  }

  save() {
    this.edit ?
      this.updateNote()
      :
      this.saveNote();
  }

  saveNote() {
    if (!this.formUsr.valid) {
      Swal.fire('Error', 'Verifiquen todos los datos', 'error');
      return;
    }
    const { title } = this.formUsr.value;
    this.noteSrv.createNote(this.formUsr.value).subscribe(resp => {
      Swal.fire('Exito', `La nota ${title} fue registrada exitosamente`, 'success');
      this.formUsr.reset();
    });
  }

  updateNote() {
    if (!this.formUsr.valid) {
      Swal.fire('Error', 'Verifiquen todos los datos', 'error');
      return;
    }
    const { title } = this.formUsr.value;
    this.noteSrv.updateNote(this.formUsr.value, this.idNota).subscribe(resp => {
      Swal.fire('Exito', `La nota ${title} fue actualizada exitosamente`, 'success');
      this.formUsr.reset();
    });
  }
}
