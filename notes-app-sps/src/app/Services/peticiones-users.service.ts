import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Swal from 'sweetalert2';

import { environment } from '../../environments/environment';
import { user } from '../Models/user.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PeticionesUsersService {
  constructor(
    private http: HttpClient
  ) { }

  createUser(formData: user) {
    console.log(formData);
    return this.http.post(`${base_url}/users`, formData).pipe(
      map((resp: any) => {
        return resp.user;
      }),
      catchError(this.manejoError)
    );
  }

  deleteUser(id: string) {

    return this.http.delete(`${base_url}/users/${id}`).pipe(
      map((resp: any) => {
        return resp.usuario;
      }),
      catchError(this.manejoError)
    );

  }

  getUsers(): Observable<unknown> {

    return this.http.get(`${base_url}/users`).pipe(
      map((resp: any) => {
        console.log(resp)
        return resp.usuarios;
      }),
      catchError(this.manejoError)
    );
  }

  getUser(id: string) {
    return this.http.get(`${base_url}/users/${id}`).pipe(
      map((resp: any) => {
        return resp.usuario;
      }),
      catchError(this.manejoError)
    );
  }

  updateUser(formData: user, id: string) {
    return this.http.put(`${base_url}/users/${id}`, formData).pipe(
      map((resp: any) => {
        return resp.usuario;
      }),
      catchError(this.manejoError)
    );
  }


  manejoError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
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
