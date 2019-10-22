import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  private postsSource = new Subject<any>();
  currentPosts = this.postsSource.asObservable();
  getPosts() {
    var posts = this.http.get("http://localhost:3000/api/posts");
    return posts;
  }
  getPost(id) {
    var post = this.http.get("http://localhost:3000/api/post/" + id);
    return post;
  }
  newPost(title, author, body) {
    this.http
      .post("http://localhost:3000/api/newPost", {
        title: title,
        author: author,
        body: body
      })
      .subscribe(resp => {
        this.postsSource.next(resp["post"]);
      });
  }
}
