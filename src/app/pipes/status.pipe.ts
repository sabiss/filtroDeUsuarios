import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: false,
})
export class StatusPipe implements PipeTransform {
  transform(status: boolean): string {
    const statusInvalido = status === undefined || status === null;

    if (statusInvalido) {
      return 'Status indisponível ou inválido';
    }

    return status ? 'ativo' : 'inativo';
  }
}
