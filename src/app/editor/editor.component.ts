import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { Editor } from '../editor';
import { EDITORS } from '../mock-editors';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {

  editorText = '';
  editors = EDITORS;
  selectedEditor?: Editor;

  changedEditor(event: EditorChangeContent | EditorChangeSelection){
    //console.log(' editor got changes ', event);
    this.editorText = event['editor']['root']['innerText'];
  }

  myClickFunction(event: Event) { 
    //just added console.log which will display the event details in browser on click of the button.
    console.log(this.editorText);
 }

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(editor: Editor) : void {
    this.selectedEditor = editor;
  }

}
