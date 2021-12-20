import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { TimelineItem } from '../../models';

@Component({
  selector: 'timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
})
export class TimelineItemComponent implements OnInit {
  @Input() post: TimelineItem = {title:'', content: '', description: ''};
  faLike = faThumbsUp

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewPost(searchPattern: string | undefined): void {
    if (searchPattern !== undefined) {
      this.router.navigate([`/post`, searchPattern]);
    }
  }

  addLike(post: TimelineItem): void {
    // post.likes++;
  }
}
