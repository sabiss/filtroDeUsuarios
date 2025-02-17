import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components/components.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentsModule],
  providers: [provideClientHydration(withEventReplay()), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
