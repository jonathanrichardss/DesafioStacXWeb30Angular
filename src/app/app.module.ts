import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonLangComponent } from './components/button-lang/button-lang.component';
import { ListIteratorComponent } from './components/list-iterator/list-iterator.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRenderComponent,
    HomeComponent,
    HeaderComponent,
    ButtonLangComponent,
    ListIteratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
