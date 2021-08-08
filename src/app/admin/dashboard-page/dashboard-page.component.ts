import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsServices} from '../shared/posts.services';
import {Post} from '../../posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = []
  pSub: Subscription
  searchStr: ''

  constructor(private postService: PostsServices) { }

  ngOnInit() {
    this.pSub = this.postService.getAll().subscribe(posts => {
      console.log( 'eto posts', posts);
      this.posts = []
      posts.forEach( ( element ) => {
        console.log('eto element', element);
        this.posts.push( {id: element.id, title: element.title, text: '', date: element.date})
      })
    })
  }

  remove(id: string) {

  }
  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }


}
