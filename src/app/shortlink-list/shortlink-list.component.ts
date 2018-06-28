import {Component, OnInit} from '@angular/core';
import {ShortlinkService} from "../shortlink.service";
import {Entry} from "../Entry";

@Component({
  selector: 'app-shortlink-list',
  templateUrl: './shortlink-list.component.html',
  styleUrls: ['./shortlink-list.component.css']
})
export class ShortlinkListComponent implements OnInit {
  shortlinks: Entry[] = [];
  newMode: boolean = false;

  private editEntry: Entry = null;

  constructor(private shortlinkService: ShortlinkService) {

  }

  ngOnInit(): void {
    //this.shortlinkService.setLogin('admin', 'correct horse battery staple');
    this.getAll();
  }

  private async getAll(): Promise<void> {
    return this.shortlinkService.getAll().toPromise().then(entries => {
      this.shortlinks = entries.sort((a, b) => b.hits - a.hits);
    });
  }

  async onShortlinkCreated(): Promise<void> {
    await this.getAll();
    this.newMode = false;
  }

  async onShortlinkUpdated(): Promise<void> {
    await this.getAll();
    this.editEntry = null;
  }

  async onEdit(entry: Entry): Promise<void> {
    this.editEntry = entry;
  }

}
