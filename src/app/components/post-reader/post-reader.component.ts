import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'src/app/models';
import { StateService } from '../../services';

@Component({
  selector: 'app-post-reader',
  templateUrl: './post-reader.component.html',
  styleUrls: ['./post-reader.component.scss']
})
export class PostReaderComponent implements OnInit {

  post: TimelineItem = {content: '', title: ''};

  constructor(private stateService: StateService) {

   }

  ngOnInit(): void {
    if (this.stateService.currentPost) {
      this.post = this.stateService.currentPost;
    }
    this.stateService.currentPost = undefined;
  }
}
