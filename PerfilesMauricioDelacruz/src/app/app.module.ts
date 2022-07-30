import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogosComponent } from './componentes/header/logos/logos.component';
import { RedesComponent } from './componentes/header/redes/redes.component';
import { BannerComponent } from './componentes/header/banner/banner.component';
import { AcercaDeComponent } from './componentes/acercaDe/acercaDe.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosComponent,
    RedesComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
