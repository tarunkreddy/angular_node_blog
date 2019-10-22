import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { PostsService } from "../posts.service";

@Component({
  selector: "new-post",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.css"]
})
export class NewPostComponent implements OnInit {
  newPostForm;
  constructor(private service: PostsService, private formBuilder: FormBuilder) {
    this.newPostForm = this.formBuilder.group({
      title: "",
      author: "",
      body: ""
    });
  }

  ngOnInit() {}

  onSubmit(postData) {
    this.service.newPost(postData.title, postData.author, postData.body);
    this.newPostForm.reset();
  }
}
