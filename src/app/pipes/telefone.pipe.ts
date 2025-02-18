import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone',
  standalone: false,
})
export class TelefonePipe implements PipeTransform {
  transform(numeroDeTelefone: string): string {
    const telefoneInvalido =
      !numeroDeTelefone ||
      numeroDeTelefone.length < 10 ||
      numeroDeTelefone.length > 11;

    if (telefoneInvalido) {
      return 'Telefone indisponível ou inválido';
    }

    if (numeroDeTelefone.length === 11) {
      const numeroFormatado = numeroDeTelefone.replace(
        /^(\d{2})(\d{5})(\d{4})$/,
        '($1) $2-$3'
      );
      return numeroFormatado;
    } else {
      const numeroFormatado = numeroDeTelefone.replace(
        /^(\d{2})(\d{4})(\d{4})$/,
        '($1) $2-$3'
      );
      return numeroFormatado;
    }
  }
}
