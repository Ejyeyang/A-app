import { Component, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../_models/post';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent implements OnInit {

  posts: Post[] = [
    {
      title: 'Neat Tree',
      imageUrl: 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      userName: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Neat Mountain',
      imageUrl: 'https://images.unsplash.com/photo-1455156218388-5e61b526818b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      userName: 'Mountain',
      content: 'I saw this neat mountain today'
    },
    {
      title: 'Neat Ocean',
      imageUrl: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      userName: 'Ocean',
      content: 'I saw this neat ocean today'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
