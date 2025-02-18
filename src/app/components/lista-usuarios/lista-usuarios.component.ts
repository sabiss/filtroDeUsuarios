import { Component, EventEmitter, Output } from '@angular/core';
import { IUsuario } from '../../interfaces/usuario/usuario.interface';
import { ListaUsuarios } from '../../data/lista-usuarios';

@Component({
  selector: 'app-lista-usuarios',
  standalone: false,
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss',
})
export class ListaUsuariosComponent {
  @Output() usuarioSelecionadoParaDetalhes = new EventEmitter<IUsuario>();
  listaUsuarios: IUsuario[] = ListaUsuarios;
  displayedColumns = ['nome', 'dataCadastro', 'status'];

  usuarioSelecionado(usuario: IUsuario) {
    this.usuarioSelecionadoParaDetalhes.emit(usuario);
    console.log(usuario);
  }
}
