import { Component } from '@angular/core';
import { IUsuario } from './interfaces/usuario/usuario.interface';
import { ListaUsuarios } from './data/lista-usuarios';
import { DadosDeFiltragem } from './interfaces/dados-de-filtragem.interface';
import { filtrarListaUsuarios } from './utils/filtrar-lista-usuario';

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
  listaUsuariosFiltrados: IUsuario[] = ListaUsuarios;

  receberUsuarioParaDetalhes(usuario: IUsuario): void {
    this.UsuarioParaMostrarDetalhes = usuario;
    this.showDetalhesUsuario = true;
  }

  executarFiltragem(dados: DadosDeFiltragem): void {
    //função impura
    this.listaUsuariosFiltrados = filtrarListaUsuarios(
      dados,
      this.listaDeUsuarios
    );
  }
}
