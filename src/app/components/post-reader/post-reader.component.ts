import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimelineItem } from '../../models';
import { StateService } from '../../services';

@Component({
  selector: 'app-post-reader',
  templateUrl: './post-reader.component.html',
  styleUrls: ['./post-reader.component.scss']
})
export class PostReaderComponent implements OnInit {

  post: TimelineItem = {content: '', title: ''};

  constructor(private stateService: StateService, private router: Router) {
   }

  ngOnInit(): void {
    if (this.stateService.currentPost) {
      this.post = this.stateService.currentPost;
    } else {
      this.router.navigate(['/']);
    }
    this.stateService.currentPost = undefined;
  }
}
