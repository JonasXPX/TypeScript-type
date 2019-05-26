import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  
  constructor(private service: PostService) {}
  
  ngOnInit(){
    this.service.getPosts()
    .subscribe(
      response => {
        this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response['id'];
          this.posts.splice(0, 0, post);
      });
  }

  updatePost(post){
    this.service.updatePost(post['id'])
    .subscribe(
      response => {
        console.log(response);
      });
  }

}
