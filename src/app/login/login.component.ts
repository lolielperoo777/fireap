import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() loginSuccessful = new EventEmitter<void>();
  correo : string='';
  contrasena :string= '';


  constructor(
    private authServiceService: AuthServiceService,
    private router : Router,
    private usuarioService:UsuarioService
    ) { }

    abrirhome() {
      this.router.navigate(['/dashboard']);
    }

  login() {
    this.usuarioService.loginUser(this.correo, this.contrasena).subscribe(
      response => {
        // Maneja la respuesta exitosa aquí
        console.log('Inicio de sesión exitoso:', response);
        this.abrirhome();
        this.loginSuccessful.emit();
        this.authServiceService.setUserEmail(this.correo);
        console.log("Inicio de sesión correcto");
      },
      error => {
        // Maneja el error aquí
        console.error('Error al iniciar sesión:', error);
        console.log("Error de inicio de sesión");
      }
    );

  }

}
