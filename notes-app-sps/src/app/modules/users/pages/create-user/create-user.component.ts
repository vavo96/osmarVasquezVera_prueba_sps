import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PeticionesUsersService } from '../../../../Services/peticiones-users.service';
import Swal from 'sweetalert2';
import { user } from '../../../../Models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public formUsr: FormGroup;
  public usrs: Array<any>;
  constructor(
    private createForms: FormBuilder,
    private usrSrv: PeticionesUsersService
  ) {
    this.formUsr = this.createForms.group({
      nombre: ['', Validators.compose([Validators.required])],
    });
    this.usrs = new Array();
  }

  ngOnInit(): void {
    this.usrSrv.getUsers().subscribe((userss: any) => {
      this.usrs = userss;
    });
  }

  saveUsr() {
    if (!this.formUsr.valid) {
      Swal.fire('Error', 'Captura el nombre', 'error');
      return;
    }

    const { nombre } = this.formUsr.value;

    this.usrSrv.createUser(this.formUsr.value).subscribe(resp => {
      Swal.fire('Exito', `El usuario ${nombre} fue registrado exitosamente`, 'success');
      this.usrs = [...this.usrs, resp];
      this.formUsr.reset();
    });
  }
}
