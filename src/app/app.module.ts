import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';
import { QuillModule } from 'ngx-quill';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    EditorComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    EditorModule,
    QuillModule.forRoot(),
    FormsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
