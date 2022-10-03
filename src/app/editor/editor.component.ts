import { Component, OnInit } from '@angular/core';
import { Editor } from '../editor';
import { EDITORS } from '../mock-editors';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {

  editors = EDITORS;
  selectedEditor?: Editor;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(editor: Editor) : void {
    this.selectedEditor = editor;
  }

}
