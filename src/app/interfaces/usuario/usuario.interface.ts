import { IEndereco } from './endereco.interface';
import { IStatus } from './status.interface';

export interface IUsuario {
  nome: string;
  email: string;
  senha: string;
  idade: number;
  endereco: IEndereco;
  telefone: string;
  ativo: boolean;
  funcao: string;
  dataCadastro: string;
  status: IStatus;
}
