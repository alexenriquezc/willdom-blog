import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { StateService } from '../../services';
import { TimelineItem } from '../../models';

@Component({
  selector: 'timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
})
export class TimelineItemComponent implements OnInit {
  @Input() post: TimelineItem = {title:'', content: ''};
  faLike = faThumbsUp

  constructor(private router: Router, private stateService: StateService) {}

  ngOnInit(): void {}

  viewPost(post: TimelineItem): void {
    if (post !== undefined) {
      this.router.navigate([`/post/view`]);
      this.stateService.currentPost = post;
    }
  }

  addLike(post: TimelineItem): void {
    // post.likes++;
  }
}
