import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValoracioComponent } from './Projecte/Components/valoracio/valoracio.component';
import { FormulariComponent } from './Projecte/Components/formulari/formulari.component';
import { CriteriComponent } from './Projecte/Components/criteri/criteri.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ValoracioComponent,
    FormulariComponent,
    CriteriComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
