import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TimelineItem } from '../../models';
import { DataService } from '../../services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  newPostForm: FormGroup;
  coverImage: string = '';

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {
    this.newPostForm = this.builder.group({
      title: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(50)])),
      content: new FormControl(),
      image: new FormControl(),
    });
  }

  ngOnInit(): void {}

  publish(e: Event): void {
    e.preventDefault();
    const post: TimelineItem = {
      title: this.newPostForm.get('title')?.value,
      content: this.newPostForm.get('content')?.value,
      publishedAt: new Date(),
      image: this.coverImage,
    };

    this.dataService.savePost(post);
    this.newPostForm.reset();
    this.router.navigate(['home']);
  }

  loadImage(event: any): void {
    const { target } = event;
    let file = target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.coverImage = reader.result as string;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }
}
