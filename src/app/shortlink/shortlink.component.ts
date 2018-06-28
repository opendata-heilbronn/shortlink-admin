import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Entry} from "../Entry";

@Component({
  selector: 'app-shortlink',
  templateUrl: './shortlink.component.html',
  styleUrls: ['./shortlink.component.css']
})
export class ShortlinkComponent implements OnInit {

  @Input() public entry: Entry;
  @Input() public hits: number;
  @Output() public onEdit = new EventEmitter<Entry>();

  constructor() {
  }

  ngOnInit() {
  }

  onEditButton() {
    this.onEdit.emit(this.entry);
  }

}
