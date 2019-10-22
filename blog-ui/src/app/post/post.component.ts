import { Component, OnInit, Input } from "@angular/core";
import { PostsService } from "../posts.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() post?;
  constructor(private route: ActivatedRoute, private service: PostsService) {}

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.service.getPost(this.route.snapshot.params.id).subscribe(data => {
        this.post = data["post"];
      });
    }
  }
}
