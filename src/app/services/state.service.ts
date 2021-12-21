import { Injectable } from '@angular/core';
import { TimelineItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  currentPost?: TimelineItem | undefined;
  constructor() { }


}
