import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {APP_CONFIG, APP_CONFIG_VALUE} from './app.config';

export function appConfigValueFactory() {
  return APP_CONFIG_VALUE;
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ {provide: APP_CONFIG, useFactory: appConfigValueFactory} ]
})
export class AppModule {
}
