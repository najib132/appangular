import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  status: boolean = true;

  posts:any[] = [];
  post = {
    id: 0,
    title:'',
    body:'',
    userId:''
  };

  constructor(private postService : PostService) { 
    
  }

   ngOnInit(): void { 
    this.getPosts();
  };

   getPosts(){
    this.postService.getAll()
    .subscribe( (posts:any)  => this.posts = posts
     ,error => {
       alert('error inattendue');
       console.log(error)
     })
  }

  createPost(){
    this.postService.create(this.post)
    .subscribe((posts :any) => {
      this.post.id = posts.id;
      this.posts.unshift(this.post);
      this.post = {
        id:0,
        title:'',
        body:'',
        userId:''
      };
    },(error:Response) => {
      if(error.status === 400){
           alert('thx to verified your informations');
      }else{
            alert('error inatendue')
            console.log(error)
      }
    })
  }

  editPost(post:any){
    this.status =! this.status;
    this.post = post;
    if(this.status){
      this.post = {
        id:0,
        title:'',
        body:'',
        userId:''
      };
    }
  }

  updatePost(post:any){
      this.postService.update(this.post)
         .subscribe(() => {
           this.post = {
            id:0,
            title:'',
            body:'',
            userId:''
          };
           this.status = true;
         },error => {
          alert('error inattendue');
          console.log(error)
        });
       }

  deletePost(post:any){
    this.postService.delete(post)
       .subscribe(() =>{
         let index = this.posts.indexOf(post);
         this.posts.splice(index,1);
       },(error : AppError) => {
         if(error instanceof NotFoundError){
           alert("ce post deja supprimer");
         }else{
           alert("erreur inattendue");
           console.log(error);
         }
       })

      }    
         
} 
