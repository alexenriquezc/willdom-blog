import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedResult, TimelineItem } from '../models';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  savePost(post: TimelineItem): void {
    const json = localStorage.getItem('posts');

    if (json != null) {
      const posts: Array<TimelineItem> = JSON.parse(json);
      posts.push(post);
      localStorage.setItem('posts', JSON.stringify(posts));
    } else {
      localStorage.setItem('posts', JSON.stringify([post]));
    }
  }

  // getLastPostId(): number {
  //   const json = localStorage.getItem('posts');

  //   if (json !=null) {
  //     const localPosts: Array<TimelineItem> = JSON.parse(json);
  //     return localPosts.sort((a,b) => b.id - a.id)[0].id;
  //   } else {
  //     return 0;
  //   }
  // }

  getLocalPosts(): Observable<Array<TimelineItem>> {
    const json = localStorage.getItem('posts');
    let localPosts: Array<TimelineItem>;

    if (json !=null) {
      localPosts = JSON.parse(json);
    } else {
      localPosts = [];
    }

    return of(localPosts);
  }

  getLocalPost(title: string): TimelineItem {
    const json = localStorage.getItem('posts');

    if (json !=null) {
      const localPosts: Array<TimelineItem> = JSON.parse(json);
      return localPosts?.find(x => x.title == title) as TimelineItem;
    } else {
      return {content: '', description: '', title: ''};
    }
  }

  getRemotePosts(pageSize: number =10, page: number = 1): Observable<PagedResult<TimelineItem>> {
    return this.http.get<PagedResult<TimelineItem>>(`https://gnews.io/api/v4/search?q=watches&token=0f34f0b2a1da85adc51fbaef05e10258&lang=en&max=${pageSize}&page=${page}`);
  }
}
