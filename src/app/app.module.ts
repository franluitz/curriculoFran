import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import { ExperienciaComponent } from './Experiencia/experiencia/experiencia.component';
import { HabilidadeComponent } from './Habilidade/habilidade/habilidade.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LinkComponent } from './link/link/link.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    ExperienciaComponent,
    HabilidadeComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
