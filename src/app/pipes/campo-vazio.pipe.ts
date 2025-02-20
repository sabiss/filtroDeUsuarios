import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'campoVazio',
  standalone: false,
})
export class CampoVazioPipe implements PipeTransform {
  transform(value: any): string | any {
    const campoVazio = value === undefined || value === null || value === '';

    if (campoVazio) {
      return '-';
    }

    return value;
  }
}
