import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// My Modules
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Globals } from './config/globals';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
