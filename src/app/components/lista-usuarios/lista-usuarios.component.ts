import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUsuario } from '../../interfaces/usuario/usuario.interface';
import { ListaUsuarios } from '../../data/lista-usuarios';
import { DadosDeFiltragem } from '../../interfaces/dados-de-filtragem.interface';

@Component({
  selector: 'app-lista-usuarios',
  standalone: false,
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss',
})
export class ListaUsuariosComponent {
  @Output() usuarioSelecionadoParaDetalhes = new EventEmitter<IUsuario>();
  @Input({ required: true }) listaUsuarios: IUsuario[] = [];
  @Input() dadosDeUsuarioParaFiltragem: DadosDeFiltragem =
    {} as DadosDeFiltragem;

  displayedColumns = ['nome', 'dataCadastro', 'status'];

  usuarioSelecionado(usuario: IUsuario) {
    this.usuarioSelecionadoParaDetalhes.emit(usuario);
    console.log(usuario);
  }
}
