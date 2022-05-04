import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ButtonbarComponent } from './buttonbar/buttonbar.component';
import { InfoboxComponent } from './infobox/infobox.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ButtonbarComponent,
    InfoboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
