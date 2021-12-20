import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services';
import { PagedResult, TimelineItem } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  localPosts: Array<TimelineItem>;
  remotePosts: Array<TimelineItem>;
  active_status: number = 1;

  constructor(private dataService: DataService) {
    this.localPosts = new Array<TimelineItem>();
    this.remotePosts = new Array<TimelineItem>();
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  private loadPosts() {
    this.dataService.getLocalPosts().subscribe(result => {
      this.localPosts = result;
    });

    this.dataService.getRemotePosts().subscribe(result => {
      this.remotePosts = result.articles
    });
  }
}
