import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsram-editor';
  editorText = '';
  buttonText = '';

  changedEditor(event: EditorChangeContent | EditorChangeSelection){
    //console.log(' editor got changes ', event);
    this.editorText = event['editor']['root']['innerText'];
  }

  // <p [innerHtml]= "editorText"> </p>

  myClickFunction(event: Event) { 
    //just added console.log which will display the event details in browser on click of the button.
    console.log(this.editorText);

 }

}

