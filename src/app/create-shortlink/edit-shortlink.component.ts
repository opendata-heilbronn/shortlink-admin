import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShortlinkService} from "../shortlink.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-shortlink',
  templateUrl: './edit-shortlink.component.html',
  styleUrls: ['./edit-shortlink.component.css']
})
export class EditShortlinkComponent implements OnInit {

  @Input() code: string;
  @Input() dest: string;
  @Output() done = new EventEmitter<void>();

  constructor(private shortlinkService: ShortlinkService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.shortlinkService.set(this.code, this.dest).subscribe(() => {
      this.done.emit();
    });
  }

  onCancel() {
    this.done.emit();
  }

}
