import { Component } from '@angular/core';
import { IUsuario } from './interfaces/usuario/usuario.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  UsuarioParaMostrarDetalhes: IUsuario = {} as IUsuario;

  receberUsuario(usuario: IUsuario) {
    console.log('executou');
    this.UsuarioParaMostrarDetalhes = usuario;
  }
}
