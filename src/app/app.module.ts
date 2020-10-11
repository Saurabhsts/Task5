import { HomeService } from './service/home.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RowDescriptionComponent } from './row-description/row-description.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent, UserformComponent, HomeComponent, RowDescriptionComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule

  ],
  providers: [HomeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
