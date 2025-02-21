import { DadosDeFiltragem } from '../interfaces/dados-de-filtragem.interface';
import { IUsuario } from '../interfaces/usuario/usuario.interface';

const filtrarPorData = (
  dataInicialParaFiltrar: Date | undefined,
  dataFinalParaFiltrar: Date | undefined,
  listaDeUsuarios: IUsuario[]
): IUsuario[] => {
  const datasNaoSelecionadas =
    dataInicialParaFiltrar == undefined || dataFinalParaFiltrar == undefined;
  if (datasNaoSelecionadas) {
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
};

const filtrarUsuarioPorStatus = (
  statusParaFiltrar: boolean | undefined,
  listaDeUsuarios: IUsuario[]
): IUsuario[] => {
  if (statusParaFiltrar == undefined) {
    return listaDeUsuarios;
  }

  const listaDeUsuariosFiltrados = listaDeUsuarios.filter(
    (usuario) => usuario.ativo == statusParaFiltrar
  );

  return listaDeUsuariosFiltrados;
};

const filtrarUsuarioPorNome = (
  nomeDoUsuarioParaFiltrar: string,
  listaUsuarios: IUsuario[]
): IUsuario[] => {
  if (!nomeDoUsuarioParaFiltrar) {
    return listaUsuarios;
  }

  const listaDeUsuariosFiltrados = listaUsuarios.filter((usuario) =>
    usuario.nome.toLowerCase().includes(nomeDoUsuarioParaFiltrar.toLowerCase())
  );

  return listaDeUsuariosFiltrados;
};
const filtrarListaUsuarios = (
  dados: DadosDeFiltragem,
  listaDeUsuarios: IUsuario[]
): IUsuario[] => {
  let listaDeUsuariosFiltrados: IUsuario[] = [];

  listaDeUsuariosFiltrados = filtrarUsuarioPorNome(dados.nome, listaDeUsuarios); //retorna a lista de usuários original ou lista com mesmo nome

  listaDeUsuariosFiltrados = filtrarUsuarioPorStatus(
    dados.status,
    listaDeUsuariosFiltrados
  ); //retorna a lista com mesmo nome ou a lista com mesmo nome e status

  listaDeUsuariosFiltrados = filtrarPorData(
    dados.dataInicio,
    dados.dataFinal,
    listaDeUsuariosFiltrados
  ); //retorna lista com nome e status ou lista com nome, status e data

  // é filtrado em 3 etapas para caso o user não digite todos os inputs e mesmo assim apareça algum usuario com alguma informação igual a um dos inputs
  return listaDeUsuariosFiltrados;
};

export { filtrarListaUsuarios };
