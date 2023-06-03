import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { AgenceComponent } from './agence/agence.component';
import { ConfrereComponent } from './confrere/confrere.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { UniteComponent } from './unite/unite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    AgenceComponent,
    ConfrereComponent,
    PersonnelComponent,
    UniteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
