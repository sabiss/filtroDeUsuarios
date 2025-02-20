import { Component } from '@angular/core';
import { IUsuario } from './interfaces/usuario/usuario.interface';
import { ListaUsuarios } from './data/lista-usuarios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  UsuarioParaMostrarDetalhes: IUsuario = {} as IUsuario;
  showDetalhesUsuario: boolean = false;
  listaDeUsuarios: IUsuario[] = ListaUsuarios;

  receberUsuario(usuario: IUsuario) {
    this.UsuarioParaMostrarDetalhes = usuario;
    this.showDetalhesUsuario = true;
  }
}
