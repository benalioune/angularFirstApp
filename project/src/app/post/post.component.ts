import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  enteredTitle = ''
  enteredContent = ''

  constructor() { }

  ngOnInit() {
  }

  addPost(){
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
          }
  }

}
