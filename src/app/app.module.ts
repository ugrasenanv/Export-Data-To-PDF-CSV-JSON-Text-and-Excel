import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableExporterModule } from 'mat-table-exporter';

@NgModule({
  // imports: [BrowserModule, FormsModule],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatTableExporterModule,
  ],

  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
