import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HeaderModule, HeaderService} from 'common-code-base';
import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
