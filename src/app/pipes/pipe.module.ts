import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoPipe } from './endereco.pipe';
import { TelefonePipe } from './telefone.pipe';
import { StatusPipe } from './status.pipe';

@NgModule({
  declarations: [EnderecoPipe, TelefonePipe, StatusPipe],
  imports: [CommonModule],
  exports: [EnderecoPipe, TelefonePipe, StatusPipe],
})
export class PipeModule {}
