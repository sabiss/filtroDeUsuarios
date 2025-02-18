import { Pipe, PipeTransform } from '@angular/core';
import { IEndereco } from '../interfaces/usuario/endereco.interface';

@Pipe({
  name: 'endereco',
  standalone: false,
})
export class EnderecoPipe implements PipeTransform {
  transform(endereco: IEndereco): string {
    const enderecoFormatado = `${endereco.rua}, ${endereco.numero}, ${endereco.cidade} - ${endereco.estado}`;

    return enderecoFormatado;
  }
}
