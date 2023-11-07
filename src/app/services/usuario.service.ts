import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http'
import { catchError } from 'rxjs';
import { Observable , throwError } from 'rxjs';
import { Usuario } from '../Interfaces/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'https://localhost:7242/api/usuario'; // Ajusta la URL base según tu configuración de API.

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}`);
  }

  insertarUsuario(archivo: File, nombre: string, apellido: string, correo: string, contrasena: string, Cargo: string, fotocheck: number): Observable<Usuario> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('correo', correo);
    formData.append('contrasena', contrasena);
    formData.append('Cargo', Cargo);
    formData.append('fotocheck', fotocheck.toString());

    return this.http.post<Usuario>(`${this.baseUrl}/insertar`, formData);
  }

  login(correo: string, contrasena: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/Login`, { correo, contrasena });
  }

  loginUser(correo: string, contrasena: string): Observable<any> {
    const data = { correo, contrasena };
    return this.http.post(`${this.baseUrl}/Login`, data);
  }

}
