import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsAdServices} from '../shared/posts.admin.services';
import {Post} from '../../posts.service';
import {Subscription} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';

function ngOnDestroy() {

}

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

    posts: Post[] = []
    pSub: Subscription
    diSub: Subscription
    searchStr: ''

    constructor(
        private alert: AlertService
        private postService: PostsAdServices
    ) {
    }

    ngOnInit() {
        this.pSub = this.postService.getAll().subscribe(posts => {
            console.log('eto posts', posts);
            this.posts = [];
            posts.forEach((element) => {
                console.log('eto element', element);
                this.posts.push({id: element.id, author: element.author, title: element.title, text: '', date: element.date});
            });
        });
    }

    remove(id: string) {
        this.diSub = this.postService.remove(id).subscribe(() => {
            this.posts = this.posts.filter(post => post.id !== id)
            this.alert.danger('пост был удолен')
        })
    }
    ngOnDestroy() {
            if (this.pSub) {
                this.pSub.unsubscribe();
            }
            if (this.diSub) {
                this.diSub.unsubscribe();
            }
        }
}
