import { Component, Output, EventEmitter } from '@angular/core';
import { DadosDeFiltragem } from '../../interfaces/dados-de-filtragem.interface';

@Component({
  selector: 'app-inputs',
  standalone: false,
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss',
})
export class InputsComponent {
  @Output() enviarDadosEmit = new EventEmitter<DadosDeFiltragem>();

  dadosDeFiltragem: DadosDeFiltragem = {
    nome: '',
    dataInicio: undefined,
    dataFinal: undefined,
    status: undefined,
  };

  enviarDados() {
    this.dadosDeFiltragem.nome.toLowerCase();
    this.enviarDadosEmit.emit(this.dadosDeFiltragem);
  }

  listaStatus = [
    {
      value: true,
      descricao: 'Ativo',
    },
    {
      value: false,
      descricao: 'Inativo',
    },
  ];
}
