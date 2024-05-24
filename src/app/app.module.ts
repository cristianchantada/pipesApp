import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';


// Configuración del locale de la app
import localeEs from '@angular/common/locales/es';
import localeFrCa from '@angular/common/locales/fr-CA';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localeFrCa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MenuModule,
  ],
  providers: [
    {
        provide: LOCALE_ID, useValue: 'es'
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
