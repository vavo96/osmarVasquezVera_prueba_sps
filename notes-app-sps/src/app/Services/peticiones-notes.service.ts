import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { note } from '../Models/note.model';
import Swal from 'sweetalert2';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PeticionesNotesService {

  constructor(
    private http: HttpClient
  ) { }
  createNote(formData: note) {
    return this.http.post(`${base_url}/notes`, formData).pipe(
      map((resp: any) => {
        return resp.msg;
      }),
      catchError(this.manejoError)
    );
  }

  deleteNote(id: string) {
    return this.http.delete(`${base_url}/notes/${id}`).pipe(
      map((resp: any) => {
        return resp.msg;
      }),
      catchError(this.manejoError)
    );
  }

  getNotes(): Observable<unknown> {
    return this.http.get(`${base_url}/notes`).pipe(
      map((resp: any) => {
        return resp.notes;
      }),
      catchError(this.manejoError)
    );
  }

  getNote(id: string) {
    return this.http.get(`${base_url}/notes/${id}`).pipe(
      map((resp: any) => {
        return resp.note;
      }),
      catchError(this.manejoError)
    );
  }

  updateNote(formData: note, id: string) {
    return this.http.put(`${base_url}/notes/${id}`, formData).pipe(
      map((resp: any) => {
        return resp.msg;
      }),
      catchError(this.manejoError)
    );
  }

  manejoError(error: HttpErrorResponse): Observable<never> {
    switch (error.status) {
      case 400:
        if (error.error.errors) {
          const errores = Object.keys(error.error.errors);
          Swal.fire('Error', error.error.errors[errores[0]].msg, 'error');
        } else {
          Swal.fire('Error', error.error.msg, 'error');
        }
        break;
      case 401:
        Swal.fire('Error', 'Esta accediendo sin autenticarse', 'error');
        break;
      case 404:
        const msg = Object.keys(error.error.errors);

        Swal.fire('Error', error.error.errors[msg[0]].msg, 'error');

        break;
      default:
        break;
    }
    return throwError('error inesperado');
  }
}
