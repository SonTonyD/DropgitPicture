import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropPictureComponent } from './drop-picture/drop-picture.component';
import { DinhComponent } from './drop-picture/dinh/dinh.component';
import { NguyenComponent } from './drop-picture/nguyen/nguyen.component';
import { KhieuComponent } from './drop-picture/khieu/khieu.component';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropPictureComponent,
    DinhComponent,
    NguyenComponent,
    KhieuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
