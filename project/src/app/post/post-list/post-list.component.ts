import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

//   posts = [
//     {title: "first post",  content: "first content" },
//     {title: "second post",  content: "second content" },
//     {title: "third post",  content: "third content" }
// ]


posts = []

constructor() { }

  ngOnInit(): void {
  }

}
