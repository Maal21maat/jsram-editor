import { Component } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsram-editor';
  editorText = '';

  changedEditor(event: EditorChangeContent | EditorChangeSelection){
    console.log(' editor got changes ', event);
    this.editorText = event['editor']['root']['innerHTML'];
  }

}

export class InputBoxesComponent {
  onClick(){
    console.log("hej");
  }
}
