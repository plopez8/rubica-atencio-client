import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulariComponent } from './Projecte/Components/formulari/formulari.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaulaComponent } from './Projecte/Components/taula/taula.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulariComponent,
    TaulaComponent

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
