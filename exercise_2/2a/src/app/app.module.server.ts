import { NgModule } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { App } from './app';
import { AppModule } from './app-module';
import { serverRoutes } from './app.routes.server';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [AppModule, BrowserModule],
  providers: [provideServerRendering(withRoutes(serverRoutes))],
  bootstrap: [App],
})
export class AppServerModule {}
