import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimelineItem } from 'src/app/models';
import { DataService } from 'src/app/services';

@Component({
  selector: 'app-post-reader',
  templateUrl: './post-reader.component.html',
  styleUrls: ['./post-reader.component.scss']
})
export class PostReaderComponent implements OnInit {

  private id: number;
  post: TimelineItem = {content: ''};

  constructor(private routerActivated: ActivatedRoute, private dataService: DataService) {
    this.id =this.routerActivated.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.post = this.dataService.getLocalPost(this.id);
  }
}
