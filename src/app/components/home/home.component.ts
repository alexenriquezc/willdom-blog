import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services';
import { TimelineItem } from '../../models';

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
    this.loadLocalPosts();
  }

  private loadLocalPosts() {
    this.dataService.getLocalPosts().subscribe((result) => {
      this.localPosts = result;
    });
  }

  private loadRemotePosts() {
    this.dataService.getRemotePosts().subscribe((result) => {
      this.remotePosts = result.articles;
    });
  }

  private loadRemotePlusPosts() {}

  changeTab(tab: number) {
    this.active_status = tab;
    switch (tab) {
      case 1:
        this.loadLocalPosts();
        break;
      case 2:
        this.loadRemotePosts();
        break;
      case 3:
        this.loadRemotePlusPosts();
        break;
    }
  }
}
