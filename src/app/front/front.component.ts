import { Component, OnInit } from '@angular/core';
import { MediaFile } from '../models/media-file';
import { MediaService } from '../services/media.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  private mediaFiles: MediaFile[];

  constructor(
    private mediaService: MediaService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.mediaService.loggedIn) {
      // TODO: Call & subscribe media service method to get files
    } else {
      this.router.navigate(['login']);
    }
  }


}
