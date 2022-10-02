import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameEngineLibModule } from '@game-engine-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameEngineLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
