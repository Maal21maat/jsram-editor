import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import Quill from 'quill';
import { HttpClient } from '@angular/common/http';
// import { Editor } from '../editor';
// import { EDITORS } from '../mock-editors';

export class Editor {
  constructor(
    public _id: number,
    public name: string,
    public text: string
  ) {
  }
}



@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})


export class EditorComponent implements OnInit{
  editors: Editor[] = [];
  editorText = '';
  editorName = '';
  blurred = false
  focused = false

  created(event: Quill) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    // tslint:disable-next-line:no-console
    // console.log('editor-change', event)
    this.editorText = event['editor']['root']['innerText'];
  }

  myClickFunction(event: Event) { 
    //just added console.log which will display the event details in browser on click of the button.
    console.log(this.editorText);
  }


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getEditors();
  }

  getEditors(){
    this.httpClient.get<Editor[]>('http://localhost:1337/editdocs').subscribe(
      response => {
        console.log(response);
        this.editors = response;
      }
    );
  }


}

/**
  editorText = '';
  //editors = EDITORS;
  selectedEditor?: Editor;

  editors: Editor[] = [];

  changedEditor(event: EditorChangeContent | EditorChangeSelection){
    //console.log(' editor got changes ', event);
    this.editorText = event['editor']['root']['innerText'];
  }

  myClickFunction(event: Event) { 
    //just added console.log which will display the event details in browser on click of the button.
    console.log(this.editorText);
  }

  constructor(private editorService: EditorService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getEditors();
  }

  onSelect(editor: Editor) : void {
    this.selectedEditor = editor;
    this.messageService.add(`EditorsComponent: Selected editor id=${editor._id}`);
  }

  getEditors(): void {
    this.editorService.getEditors().subscribe(editors => this.editors = editors);
      console.log(this.editors)
  }*/

