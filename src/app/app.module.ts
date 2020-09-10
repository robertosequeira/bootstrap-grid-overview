import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainersComponent } from './containers/containers.component';
import { MediaQueriesComponent } from './media-queries/media-queries.component';
import { ColumnsComponent } from './columns/columns.component';
import { FlexComponent } from './flex/flex.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainersComponent,
    MediaQueriesComponent,
    ColumnsComponent,
    FlexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
