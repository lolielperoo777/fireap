import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/Interfaces/usuario';

@Component({
  selector: 'app-spt02',
  templateUrl: './spt02.component.html',
  styleUrls: ['./spt02.component.scss']
})
export class Spt02Component {
  pdfUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/pdf/plantilla3.pdf');
  zoomLevel: number = 1.0;
  private pdfViewerLoaded = false;
  usuarios: Usuario[] = []; // Agrega esta línea en la clase ForSubestacionComponent
  correoSeleccionado: string = ''; // Agregar propiedad para correo seleccionado
  rutaFirmaSeleccionada: string = '';

  constructor(
    private sanitizer: DomSanitizer,private usuarioService: UsuarioService) {
    // Resto del código


  }



  ngOnInit() {
    this.usuarioService.getUsers().subscribe(
      (usuarios: Usuario[]) => {
        this.usuarios = usuarios;
        console.log('Usuarios:', this.usuarios);
        if (this.usuarios.length > 0) {
        } else {
          // Si no se obtuvieron usuarios, manejar la excepción.
          console.error('No se obtuvieron usuarios.');
        }
      },
      (error: any) => {
        // Manejar errores al obtener usuarios.
        console.error('Error al obtener la lista de usuarios:', error);
      }
    );
  }


  async editarFormularioPDF() {
    try {
      if (!this.pdfViewerLoaded) {
        throw new Error('El visor de PDF no está cargado.');
      }

      // Carga el PDF existente
      const existingPdfBytes = '/assets/pdf/plantilla1.pdf'; // Ruta a tu PDF existente

      // Resto del código para editar el formulario PDF

    } catch (error) {
      console.error('Error al editar el formulario PDF:', error);
    }
  }


  seleccionarUsuario(event: any) {
    const fotocheckSeleccionado = parseInt(event.target.value, 10); // Convierte a número base 10
    console.log('Valor seleccionado:', fotocheckSeleccionado);

    // Agregar este mensaje para verificar los valores de fotocheck en el arreglo de usuarios
    console.log('Valores de usuario.fotocheck en el arreglo:');
    this.usuarios.forEach((usuario) => {
      console.log(`Usuario: ${usuario.correo}, fotocheck: ${usuario.fotocheck}`);
    });

    // Busca el usuario correspondiente en el arreglo de usuarios
    const usuarioSeleccionado = this.usuarios.find((usuario) => usuario.fotocheck === fotocheckSeleccionado);

    if (usuarioSeleccionado) {
      this.correoSeleccionado = usuarioSeleccionado.correo;
      this.rutaFirmaSeleccionada = usuarioSeleccionado.rutaFirma;
    } else {
      console.error('Usuario no encontrado.');
    }
  }


  /*
  extraerDatosPDF() {

    try {
      if (!this.pdfViewerLoaded) {
        throw new Error('El visor de PDF no está cargado.');
      }

      if (window.PDFViewerApplication) {
        // Resto del código para extraer datos del formulario PDF
      } else {
        throw new Error('El objeto PDFViewerApplication no está disponible.');
      }
    } catch (error) {
      console.error('Error al extraer datos del formulario PDF:', error);
    }
  }

  ngAfterViewInit() {
    this.pdfViewerLoaded = true;
  }*/
}
