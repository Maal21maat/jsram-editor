import { Injectable } from '@angular/core';
import { Editor } from './editor';
import { EDITORS } from './mock-editors';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private messageService: MessageService) { }

  getEditors(): Observable<Editor[]> {
    const editors = of(EDITORS);
    this.messageService.add('EditorService: fetched editors');
    return editors;
  }

}
