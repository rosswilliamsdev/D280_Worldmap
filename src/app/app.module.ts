import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';
import { FactsComponent } from './facts/facts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, WorldComponent, FactsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
