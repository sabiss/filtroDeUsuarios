import { Component } from '@angular/core';
import { IUsuario } from './interfaces/usuario/usuario.interface';
import { ListaUsuarios } from './data/lista-usuarios';
import { DadosDeFiltragem } from './interfaces/dados-de-filtragem.interface';

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

  dadosParaFiltragem: DadosDeFiltragem = {} as DadosDeFiltragem;

  receberUsuarioParaDetalhes(usuario: IUsuario): void {
    this.UsuarioParaMostrarDetalhes = usuario;
    this.showDetalhesUsuario = true;
  }

  executarFiltragem(dados: DadosDeFiltragem): void {
    //função impura
    this.listaUsuariosFiltrados = this.filtrarUsuarios(
      dados,
      this.listaDeUsuarios
    );
  }
  //FUNÇÕES PURAS
  filtrarUsuarios(
    dados: DadosDeFiltragem,
    listaDeUsuarios: IUsuario[]
  ): IUsuario[] {
    const usuariosComMesmoNome = this.filtrarUsuarioPorNome(
      dados.nome,
      listaDeUsuarios
    ); //retorna a lista de usuários original ou lista com mesmo nome

    const usuariosComMesmoStatus = this.filtrarUsuarioPorStatus(
      dados.status,
      usuariosComMesmoNome
    ); //retorna a lista com mesmo nome ou a lista com mesmo nome e status

    const listaDeUsuariosFiltrados = this.filtrarPorData(
      dados.dataInicio,
      dados.dataFinal,
      usuariosComMesmoStatus
    ); //retorna lista com nome e status ou lista com nome, status e data

    // é filtrado em 3 etapas para caso o user não digite todos os inputs e mesmo assim apareça algum usuario com alguma informação igual a um dos inputs
    return listaDeUsuariosFiltrados;
  }

  filtrarUsuarioPorNome(
    nomeDoUsuarioParaFiltrar: string,
    listaUsuarios: IUsuario[]
  ) {
    if (!nomeDoUsuarioParaFiltrar) {
      return listaUsuarios;
    }

    const listaDeUsuariosFiltrados = listaUsuarios.filter((usuario) =>
      usuario.nome
        .toLowerCase()
        .includes(nomeDoUsuarioParaFiltrar.toLowerCase())
    );

    return listaDeUsuariosFiltrados;
  }
  filtrarUsuarioPorStatus(
    statusParaFiltrar: boolean | undefined,
    listaDeUsuarios: IUsuario[]
  ) {
    if (!statusParaFiltrar) {
      return listaDeUsuarios;
    }

    const listaDeUsuariosFiltrados = listaDeUsuarios.filter(
      (usuario) => usuario.ativo == statusParaFiltrar
    );

    return listaDeUsuariosFiltrados;
  }
  filtrarPorData(
    dataInicialParaFiltrar: Date | undefined,
    dataFinalParaFiltrar: Date | undefined,
    listaDeUsuarios: IUsuario[]
  ) {
    if (!dataInicialParaFiltrar || !dataFinalParaFiltrar) {
      return listaDeUsuarios;
    }
    const listaDeUsuariosFiltrados = listaDeUsuarios.filter((usuario) => {
      const dataDoUsuario = new Date(usuario.dataCadastro);

      const usuarioDentroDoIntervaloDaData =
        dataDoUsuario >= dataInicialParaFiltrar &&
        dataDoUsuario <= dataFinalParaFiltrar;

      return usuarioDentroDoIntervaloDaData;
    });
    return listaDeUsuariosFiltrados;
  }
}
