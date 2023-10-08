import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts: any[] | undefined;
  
  constructor(private _postService: PostService){ }

  ngOnInit(): void {
    this._postService
      .getAll().subscribe(
        response=> {
          this.posts = response as any[];
        }, (error: AppError) => {
          if(error instanceof NotFoundError){
            alert('Not Found')
          } else{
            alert('Error happened...');
            console.log(error);
          }
        });
  }

  createPost( postTitle: HTMLInputElement){
    console.log('posting...');

    let post = { title: postTitle.value };
    postTitle.value = '';

    this._postService.create(JSON.stringify(post))
    .subscribe( 
      response => {
        post['id'] = response['id'];
        this.posts.splice(0,0,post);
        console.log(response);
      }, 
      (error: AppError) => {
        if(error instanceof BadInput){
          alert('the body is not correct...')
        } else 
          throw error;
      });
  }

  updatePost(post:{title: string, id: number}){

    // this._httpService.put(); // for few updates of object.
    this._postService.update(post.id,JSON.stringify(post))
    .subscribe(
      response => {
        console.log(response);
      }); 
  }

  deletePost(post:{title: string, id: number}){
    this._postService.delete(post.id)
      .subscribe (
        response => {
          console.log(response);
        }, 
        (error: AppError) => {
          if(error instanceof NotFoundError){
            alert('this post may be deleted.')
          } else 
            throw error;
        });
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
  }
}
