import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss']
})
export class MantenimientoComponent {
  constructor(
    private router: Router
  ) {}

  abrirformulario(event: Event) {
    event.preventDefault(); // Previene la acción predeterminada del navegador
    this.router.navigate(['for-subestacion']);
  }
}
