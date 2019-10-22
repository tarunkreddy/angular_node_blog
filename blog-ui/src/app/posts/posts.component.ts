import { Component, OnInit } from "@angular/core";
import { PostsService } from "../posts.service";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  title = "Posts";
  posts;
  constructor(private service: PostsService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(data => {
      this.posts = data["posts"];
    });
    this.service.currentPosts.subscribe(post => this.posts.push(post));
  }
}
